import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { stories } from '../../store/actions';
import { storiesTypeSelector } from '../../store/stories/selector';

const ButtonWrapper = styled.div`
  display: inline-block;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: transparent;
  color: var(--highlight-dark);
  padding: .5em 1em;
  outline: none;
  font-size: .9em;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid var(--highlight-dark);

  &:not(:last-child):not(.active) {
    border-right: none;
  }

  &:hover {
    background-color: var(--page-primary-color);
  }

  &.active {
    background-color: var(--page-action-btn);
    border-color: var(--page-action-btn);
    color: var(--page-primary-color);

    & + button {
      border-left: none;
    }
  }
`;

const Filter = ({type, setType}) => {
  const options = [
    {
      label: 'Front',
      value: 'topstories',
    },
    {
      label: 'New',
      value: 'newstories',
    },
    {
      label: 'Best',
      value: 'beststories',
    }
  ]

  const handleOnClick = e => {
    console.log(e);
    setType(e.target.dataset.value);
  };

  return (
    <ButtonWrapper>
      {options.map(item => (
        <Button key={item.label} onClick={handleOnClick} data-value={item.value} className={type === item.value ? 'active' : ''}>{item.label}</Button>
      ))}
    </ButtonWrapper>
  )
}

const mapStateToProps = state => ({
  type: storiesTypeSelector(state)
});

const mapDispatchToProps = dispatch => ({
  setType: bindActionCreators(stories.setStoriesType, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);