import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
  WindowScroller,
  AutoSizer
} from 'react-virtualized';
const gutter = 10;
const columnCount = 3;
const columnWidth = 300;
const defaultHeight = 250;

const Empty = styled.div`
  width: 100%;
  padding: 60px 0;
  text-align: center;
  font-size: 1rem;
  opacity: .6;
`;

const Wrapper = styled.div`
  .ReactVirtualized__Grid {
    max-width: initial;
  }
`;

const Grid = ({ data, renderItem }) => {
  const masonryRef = useRef();

  const cache = new CellMeasurerCache({
    defaultHeight: defaultHeight,
    defaultWidth: columnWidth,
    fixedWidth: true
  });

  const cellPositioner = createMasonryCellPositioner({
    cellMeasurerCache: cache,
    columnCount: columnCount,
    columnWidth: columnWidth,
    spacer: gutter
  });

  useEffect(() => {
    cellPositioner.reset({
      columnCount: 3,
      columnWidth: columnWidth,
      spacer: 10
    });

    if(masonryRef.current) masonryRef.current.recomputeCellPositions();
  }, [data, cellPositioner]);

  const cellRenderer = ({index, key, parent, style, isScrolling}) => {
    return (
      <CellMeasurer cache={cache} index={index} key={key} parent={parent}>
        <div style={style}>
          {isScrolling ? 'SCROLLING' : 'NOT SCROLLING'}
          {renderItem(data[index])}
        </div>
      </CellMeasurer>
    );
  }

  return data.length ? (
    <WindowScroller overscanByPixels={2} scrollElement={window}>
        {({height, isScrolling}) => (
          <AutoSizer
            disableHeight
            overscanByPixels={2}
            height={height}>
            {({width}) => (
              <Masonry
                autoHeight
                cellMeasurerCache={cache}
                cellCount={data.length}
                cellPositioner={cellPositioner}
                isScrolling={isScrolling}
                cellRenderer={cellRenderer}
                overscanByPixels={2}
                height={height}
                width={width}
                ref={masonryRef}
              />
            )}
        </AutoSizer>
        )}
      </WindowScroller>
  ) : (
    <Empty>No data.</Empty>
  )
}

export default Grid;