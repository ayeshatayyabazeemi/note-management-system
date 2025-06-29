import React from 'react';
import './SignUpForm.css';
import { motion } from 'framer-motion';
import { BsPerson, BsEnvelope, BsLock } from 'react-icons/bs';

const SignUpForm = ({ toggleForm }) => {
  return (
    <motion.div
      className="form-wrapper align-items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="form sign-up">
        <div className="input-group">
          <BsPerson className="icon" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-group">
          <BsEnvelope className="icon" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-group">
          <BsLock className="icon" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="input-group">
          <BsLock className="icon" />
          <input type="password" placeholder="Confirm Password" />
        </div>
        <button>Sign up</button>
        <p>
          <span>Already have an account?</span>{' '}
          <b onClick={toggleForm} className="pointer">Sign in here</b>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpForm;
