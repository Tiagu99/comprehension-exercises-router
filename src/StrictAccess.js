import React from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends React.Component {
  render () {
    const { user } = this.props;
    const { username, password } = user;
    if (!(username === 'joao' && password === '1234')) {
      alert('Access denied');
      return(<Redirect to="/" />);
    }
    return (<p>Welcome João!</p>);
  }
}

export default StrictAccess;