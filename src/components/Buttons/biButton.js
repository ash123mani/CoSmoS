import React from 'react';
import styled from 'styled-components';
import { _ButtonProps } from './common';


const _ACBorder = styled(_ButtonProps)`
  &:before, &:after {
    position: absolute;
    width: 0%;
    color: red;
    content: '';
    height: 2px;
    bottom: 0px;
    background: green;
  }

  &:before {
    right: ${props => (props.right ? 0 : "50%")};
    display: ${props => props.right || props.middle ? "block" : "none"}
  }

  &:after {
    left: ${props => props.left ? 0 : "50%"};
    display: ${props => props.left || props.middle ? "block" : "none"};
  }

  &:hover:after,
  &:hover:before {
    width: ${props => props.right || props.left ? "100%" : "50%"};
    transition: all 0.4s ease-in-out;
  }

  &:hover {
    border: unset;
    background: #504d4d;
    transition: all 0.5s ease-in-out;
    color: #fff;
  }
`

// takes left , right, middle and (rigth and left) both also

export const BiButton = ({ pl, pr, pt, pb, bg, message, right, left, middle}) => (
  <_ACBorder bg={bg} pr={pr} pl={pl} pb={pb} pt={pt} right={right} left={left} middle={middle}>{message}</_ACBorder>
)
