// Run this example by adding <%= javascript_pack_tag 'react_main' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import Cards from './components/cards.jsx';
import Header from './components/header';
import "tachyons";

const Main = props => (
  <div>
    <Header />
    <Cards />
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Main />,
    document.body.appendChild(document.createElement('div')),
  )
})
