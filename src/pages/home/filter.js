import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { stories } from '../../store/actions';
import { storiesTypeSelector } from '../../store/stories/selector';
import { ReactComponent as ChevronDown } from '../../images/chevron-down.svg';

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 1em;
  z-index: 1;
  svg {
    position: absolute;
    right: 0;
    margin: 5px 0.6em;
    z-index: -1;
  }
`;

const Select = styled.select`
  background-color: transparent;
  color: var(--page-font-color);
  border: 1px solid currentColor;
  padding: .5em 1em;
  border-radius: 4px;
  outline: none;
  font-size: .9em;
  font-weight: 500;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 2.4em;
  cursor: pointer;

  & * {
    background-color: var(--page-primary-color);
    color: var(--page-font-color);
  }
`;

const Filter = ({type, setType}) => {
  const options = [
    {
      label: 'Top Stories',
      value: 'topstories',
    },
    {
      label: 'New Stories',
      value: 'newstories',
    },
    {
      label: 'Best Stories',
      value: 'beststories',
    }
  ]

  const handleSelectChange = e => setType(e.target.value);

  return (
    <SelectWrapper>
      <Select value={type} onChange={handleSelectChange}>
        {options.map(item => (
          <option value={item.value} key={item.value}>{item.label}</option>
        ))}
      </Select>
      <ChevronDown />
    </SelectWrapper>
  )
}

const mapStateToProps = state => ({
  type: storiesTypeSelector(state)
});

const mapDispatchToProps = dispatch => ({
  setType: bindActionCreators(stories.setStoriesType, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);