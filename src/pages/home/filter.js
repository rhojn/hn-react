import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setStoriesType } from '../../store/stories/action';
import { storiesTypeSelector } from '../../store/stories/selector';

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
    <select value={type} onChange={handleSelectChange}>
      {options.map(item => (
        <option value={item.value} key={item.value}>{item.label}</option>
      ))}
    </select>
  )
}

const mapStateToProps = state => ({
  type: storiesTypeSelector(state)
});

const mapDispatchToProps = dispatch => ({
  setType: bindActionCreators(setStoriesType, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);