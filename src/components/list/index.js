import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { WindowScroller, AutoSizer, List as VList, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
import { getScrollYFromElementOrWindow, tryUntil} from '../../lib';

const cache = new CellMeasurerCache({
  defaultHeight: 185,
  fixedWidth: true
});

const ScrollTopButton = styled.button`
  position: fixed;
  right: 360px;
  bottom: 24px;
  background-color: var(--page-background-color);
  border: 1px solid var(--page-action-btn);
  color: var(--page-font-color);
  padding: .6em 1em;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--page-action-btn);
    color: var(--page-primary-color);
  }
`;

const List = ({ count, rowRenderer }) => {
  const [scrolled, setScrolled] = useState(false);
  const listRef = useRef();
  const scrollToTop = () => {
    listRef.current.scrollToRow(0);
    setScrolled(false);
  };

  // Workaround for scrollToRow
  // https://github.com/bvaughn/react-virtualized/issues/1507
  const handleRef = useCallback((ref) => {
    if (ref !== null) {
      // Override and fix scrollToPosition
      ref.scrollToPosition = (scrollTop) => tryUntil(() => {
        // Use the scroll element ref passed from props
        if (window) {
            // Use the `scrollTo` method from the passed element
            window.scrollTo({ top: scrollTop })
            // Get updated scroll top form the element
            const updatedScrollTop = getScrollYFromElementOrWindow(window)
            // Done if targeted scroll top is met (case: true), or
            // Try next if targeted scroll top is not met (case: false)
            return updatedScrollTop === scrollTop
        }
        // Try next
        return false
      }, 30, 0);

      ref.scrollToRow = (index) => {
        const scrollTop = ref.getOffsetForRow({ index })
        ref.scrollToPosition(scrollTop)
      }

      // Pass ref to listRef to access method
      listRef.current = ref;
    }
  }, []);

  const handleRowRenderer = ({key, index, style, parent, isVisible}) => (
    <CellMeasurer
      cache={cache}
      columnIndex={0}
      key={key}
      parent={parent}
      rowIndex={index}
    >
      {({measure, registerChild }) => (
          <div ref={registerChild}
            style={{...style, 
              padding: '0 1em'
            }}>
            {rowRenderer(index, isVisible, measure)}
          </div>
        )}
    </CellMeasurer>
    
  )

  const handleOnScroll = ({scrollTop}) => {
    if(scrollTop === 0 && scrolled) setScrolled(false);
    if(scrollTop > 100 && !scrolled) setScrolled(true);
  };

  return (
    <>
    <WindowScroller onScroll={handleOnScroll}>
      {({height, isScrolling, onChildScroll, scrollTop}) => (
        <AutoSizer disableHeight>
          {({width}) => (
            <VList
              ref={handleRef}
              autoHeight
              height={height}
              width={width}
              isScrolling={isScrolling}
              onScroll={onChildScroll}
              rowCount={count}
              deferredMeasurementCache={cache}
              rowHeight={cache.rowHeight}
              rowRenderer={handleRowRenderer}
              scrollTop={scrollTop} />
          )}
        </AutoSizer>
      )}
    </WindowScroller>
    {scrolled && <ScrollTopButton onClick={scrollToTop}>Scroll to top</ScrollTopButton>}
    </>
  )
}

export default List;