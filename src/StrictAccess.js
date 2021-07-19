import React from 'react';
import { Redirect } from 'react-router';

class StrictAccess extends React.Component {
  render () {
    const { username, password } = this.props;
    return (
    <div>
      { username === 'joao' && password === '1234'
      ? <p>Welcome João</p>
      : alert('Access denied') (<Redirect to="/" /> ) }
    </div>
    );
  }
}

export default StrictAccess;