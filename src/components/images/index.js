import React from 'react';
import { Container, Wrapper, Images} from './styles/images.js';

export default function Image({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Image.Wrapper = function ImageWrapper({children, ...restProps}) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Image.Images = function ImageWrapper({children, ...restProps}) {
  return <Images {...restProps}>{children}</Images>
}
