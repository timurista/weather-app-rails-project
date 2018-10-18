import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'tachyons-components';
import addDays from 'date-fns/add_days';
import format from 'date-fns/format';
import mockResponse from '../mocks/mockResponse';


const now = new Date();
const kelvinToF = (kelvinValue) => (( kelvinValue - 273.15) * 9/5) + 32;

const StyledConatiner = styled('ul')`
  pt16
  list pl0
`

const StyledCard = styled('li')`
  center mw5 mw6-ns br3 hidden ba b--black-10 mv4
`;

const CardTitle = styled('h2')`
  f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3
`

const CardBody = styled('p')`
  f6 f5-ns lh-copy measure center
`

const Card = ({ item, index }) => (
  <StyledCard key={item.id}>
    <CardTitle>
      {index === 0 && 'Today'}
      {index === 1 && 'Tomorrow'}
      {index > 1 && format(addDays(now, index), 'ddd MMM Do')}
    </CardTitle>
    <CardBody>
      {kelvinToF(item.main.temp).toFixed(1)+' °F'}
    </CardBody>
  </StyledCard>
)

const Cards = props => (
  <StyledConatiner>
    {props.list.slice(0,5).map((item, index) => <Card item={item} key={item.id} index={index} />)}
  </StyledConatiner>
)

Cards.defaultProps = {
  list: mockResponse.list || [1,2,3,4,5]
}

export default Cards;