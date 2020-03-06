import React from 'react';

import { Wrapper, Content } from './styles';
import Header from '~/components/Header';

export default function defaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  );
}
