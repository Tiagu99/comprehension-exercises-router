import React from 'react';
import { Redirect } from 'react-router';

class StrictAccess extends React.Component {
  render () {
    const { user } = this.props;
    const { username, password } = user;
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