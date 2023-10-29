import React from 'react';

import { Wrapper } from './styles';
import CheckItem from '../CheckItem';

export default function Items() {
  const copy = [
    'Product discovery and building what matters',
    'Measuring to ensure updates are a success',
    'And much more!',
  ];

  return (
    <Wrapper>
      {copy.map((text) => (
        <CheckItem text={text} />
      ))}
    </Wrapper>
  );
}
