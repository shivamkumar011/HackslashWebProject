import React from 'react';
import { Container, Wrapper, Wrapper1, Hide, Row, Row1, Column, Link, Link1, Link2, Link3, Title, Column1, Column2, Column3, Text, Form, Together} from './styles/footer.js';

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({children, ...restProps}) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Wrapper1 = function FooterWrapper({children, ...restProps}) {
  return <Wrapper1 {...restProps}>{children}</Wrapper1>
}

Footer.Hide = function FooterWrapper({children, ...restProps}) {
  return <Hide {...restProps}>{children}</Hide>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Row1 = function FooterRow({ children, ...restProps }) {
  return <Row1 {...restProps}>{children}</Row1>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Column1 = function FooterColumn({ children, ...restProps }) {
  return <Column1 {...restProps}>{children}</Column1>;
};

Footer.Column2 = function FooterColumn({ children, ...restProps }) {
  return <Column2 {...restProps}>{children}</Column2>;
};

Footer.Column3 = function FooterColumn({ children, ...restProps }) {
  return <Column3 {...restProps}>{children}</Column3>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Link1 = function FooterLink({ children, ...restProps }) {
  return <Link1 {...restProps}>{children}</Link1>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Footer.Link2 = function FooterLink({ children, ...restProps }) {
  return <Link2 {...restProps}>{children}</Link2>;
};
Footer.Link3 = function FooterLink({ children, ...restProps }) {
  return <Link3 {...restProps}>{children}</Link3>;
};
Footer.Text = function FooterLink({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Footer.Form = function FooterLink({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};
Footer.Together = function FooterLink({ children, ...restProps }) {
  return <Together {...restProps}>{children}</Together>;
};