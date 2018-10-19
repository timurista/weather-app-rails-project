import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import addDays from 'date-fns/add_days';
import format from 'date-fns/format';
import mockResponse from '../mocks/mockResponse';


const now = new Date();
const kelvinToF = (kelvinValue) => (( kelvinValue - 273.15) * 9/5) + 32;

const StyledConatiner = styled.ul`
  list-style: none;
  margin-left: 0;
`

const StyledCard = styled.li;

const CardTitle = styled.h2;

const CardBody = styled.p;

const Card = ({ item, index }) => (
  <StyledCard key={item.id} className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
    <CardTitle className='f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3'>
      {index === 0 && 'Today'}
      {index === 1 && 'Tomorrow'}
      {index > 1 && format(addDays(now, index), 'ddd MMM Do')}
    </CardTitle>
    <CardBody className='f6 f5-ns lh-copy measure center'>
      {kelvinToF(item.main.temp).toFixed(1)+' °F'}
    </CardBody>
  </StyledCard>
)

const Cards = props => (
  <StyledConatiner className="list p16">
    {props.list.slice(0,5).map((item, index) => <Card item={item} key={item.id} index={index} />)}
  </StyledConatiner>
)

Cards.defaultProps = {
  list: mockResponse.list || [1,2,3,4,5]
}

export default Cards;