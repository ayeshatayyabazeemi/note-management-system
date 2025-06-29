import React from 'react';
import './SignInForm.css';
import { motion } from 'framer-motion';
import { BsPerson, BsLock } from 'react-icons/bs';

const SignInForm = ({ toggleForm }) => {
  return (
    <motion.div
      className="form-wrapper align-items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="form sign-in">
        <div className="input-group">
          <BsPerson className="icon" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-group">
          <BsLock className="icon" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Sign in</button>
        <p>
          <b>Forgot password?</b>
        </p>
        <p>
          <span>Don't have an account?</span>{' '}
          <b onClick={toggleForm} className="pointer">Sign up here</b>
        </p>
      </div>
    </motion.div>
  );
};

export default SignInForm;
