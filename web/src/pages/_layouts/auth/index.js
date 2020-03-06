import PropTypes from 'prop-types';
import React from 'react';

import { Wrapper, Content } from './styles';

export default function authLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

authLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
