import React from 'react';
import List from './list';

const Comments = ({ ids }) => (
  <>
    {ids.length ? (
      <List ids={ids} />
    ) : null}
  </>
);

export default Comments;