import React from 'react';
import { Container, Wrapper, Aboveft, Buttn, Textname, Reqst, Hads} from './styles/above.js';

export default function Above({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Above.Wrapper = function AboveWrapper({children, ...restProps}) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Above.Aboveft = function AboveWrapper({children, ...restProps}) {
  return <Aboveft {...restProps}>{children}</Aboveft>
}

Above.Buttn = function AboveWrapper({children, ...restProps}) {
  return <Buttn {...restProps}>{children}</Buttn>
}

Above.Textname = function AboveWrapper({children, ...restProps}) {
  return <Textname {...restProps}>{children}</Textname>
}

Above.Reqst = function AboveWrapper({children, ...restProps}) {
  return <Reqst {...restProps}>{children}</Reqst>
}


Above.Hads = function AboveWrapper({children, ...restProps}) {
  return <Hads {...restProps}>{children}</Hads>
}