import React, { Component } from 'react';
import Logo from '../../atoms/logo/logo';

export default class Header extends Component {
  render() {
    return <div className='header'>
        <Logo />
      </div>
  }
}