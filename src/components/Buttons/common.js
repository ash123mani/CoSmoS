import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';

export const _ButtonProps = styled.button`
  background: ${props => props.bg || "green"};
  padding-left: ${props => props.pl || "20px"};
  padding-right: ${props => props.pr || "20px"};
  padding-top: ${props => props.pt || "5px"};
  padding-bottom: ${props => props.pb || "5px"};
  font-size: ${props => props.fs || "14px"};
  // border: 2px solid #F7CA18;
  border: unset;
  position: relative;
  cursor: pointer;
  color: #fff;
  display: block;
  transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
`
