import React from 'react';
import './SignInForm.css';
import { motion } from 'framer-motion';
import { BsPerson, BsLock } from 'react-icons/bs';
import {useState}from 'react';
import axios from 'axios';
const SignInForm = ({ toggleForm }) => {
  const [formdata,setformdata]=useState({
    username:"",
    password:""
  })
  const handleSignin= async ()=>{
    try{
      const res=await axios.post('http://localhost:5000/api/auth/signin',{
      username:formdata.username,
      password:formdata.password
    });
    setformdata({
      username:"",
    password:""
    });
    alert("sign in successfull");
    console.log(res);
    localStorage.setItem("jwtToken",res.data.token);
  }catch(error){
    
      alert("sign in failed"+ error.response?.data?.message || error.message)
    
  }}
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
          <input type="text" placeholder="Username" value={formdata.username} onChange={(e)=> setformdata({...formdata,username:e.target.value})} />
        </div>
        <div className="input-group">
          <BsLock className="icon" />
          <input type="password" placeholder="Password" value={formdata.password} onChange={(e) => setformdata({ ...formdata, password: e.target.value })} />
        </div>
        <button onClick={handleSignin}>Sign in</button>
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
