import React from 'react';
import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 30px;
  color: ${props => props.color || 'blue'};
  font-weight: 600;
`

export const H2 = styled(H1)`
  font-size: 24px;
`

export const H3 = styled(H1)`
  font-size: 18px;
  color: green;
`

export const H4 = styled(H2)`
  font-size: 16px;
`
