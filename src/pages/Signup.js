import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password1: '',
    password2: '',
  });

  const setField = () => {
    setFormData();
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="email" />
        <input type="password" />
        <input type="password" />
      </form>
    </div>
  );
};

export default withRouter(connect()(Signup));
