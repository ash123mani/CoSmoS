import React from 'react';
import styled from 'styled-components';
import { _ButtonProps } from './common';

import "./css/chackraButton.css"

const _ChakraButton = styled(_ButtonProps)`
&.span:nth-of-type(1) {
  display: block;
  margin-right: 10px;
}

&::before, &::after{
  content:"";
  width: 0;
  height: 2px;
  position: absolute;
  transition: all 0.2s linear;
  background: green;
}

span::before, span::after{
  content:"";
  width:2px;
  height:0;
  position: absolute;
  transition: all 0.2s linear;
  background: green;
}

`


export const ChackraButton = ({ pl, pr, pt, pb, bg, message, classNaam }) => (
  <_ChakraButton className="chakra-5" bg={bg} pr={pr} pl={pl} pb={pb} pt={pt}>
    <span>{message}</span>
  </_ChakraButton>
)
