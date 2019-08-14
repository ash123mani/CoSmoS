import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import {_ButtonProps } from './common';

export const _Button = styled(_ButtonProps)`
  &:hover {
    color: #fff;
    background-color: #504d4d;
    text-shadow: none;
    border: 2px solid green
  }

  &:hover:before {
    bottom: 0%;
    top: auto;
    height: 100%;
  }

  &:before {
    display: block;
    position: absolute;
    left: 0px;
    top: 0px;
    height: 0px;
    width: 100%;
    z-index: -1;
    content: '';
    color: #000 !important;
    transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }
`


export const Button = ({ pl, pr, pt, pb, bg, message }) => (
    <_Button bg={bg} pr={pr} pl={pl} pb={pb} pt={pt}>{message}</_Button>
)
