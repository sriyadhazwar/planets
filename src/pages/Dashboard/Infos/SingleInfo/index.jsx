import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Quantity, Icon } from './styles';

const SingleInfo = ({ title, quantity, icon, to }) => (
  <Container to={to}>
    <div>
      <Title>{title}</Title>
      <Quantity>{quantity}</Quantity>
    </div>
    <Icon src={icon} alt="Characters" />
  </Container>
);

SingleInfo.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default SingleInfo;
