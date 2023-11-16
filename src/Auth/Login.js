import React from "react";
import { FormControl, InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import { InputLabel, OutlinedInput } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const history = useHistory();
  const handleLogin = () => {
    return (
      history.push('/cashMaster')
    );
  };

  return (
    <div className="login-wrapper">
      <div className="left-container">
        <div className="writings">
          <div className="effort">Effortless Petty Cash Management</div>
          <div className="subhead">
            Streamline your petty cash processes with BirdWallet and experience
            the ease of managing funds and expenses.
          </div>
        </div>
        <div className="img">
          <img
            src="/Assets/experimental-minimal-black-line-money.png"
            alt="BirdWallet"
          ></img>
        </div>
      </div>
      <div className="right-container">
        <form className="form-wrapper" onSubmit={handleLogin}>
          <div className="company-name">Birdscale</div>
          <div className="welcome">
            <div className="to">
              Welcome to
              <div className="sp">
                <p className="bird">Bird</p>
                <p className="wallet">Wallet</p>
              </div>
            </div>
          </div>
          <div className="text-form">
            <div className="tform-1">
              <div className="username">Username</div>
              <div className="name-field">
                <TextField name="email" label='Enter your Email' style={{width:'345px'}} />
              </div>
            </div>
            <div className="tform-2">
              <div className="password">Password</div>
              <div className="pass-field">
                  <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" style={{width:'345px', margin:0}}>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              </FormControl>
              </div>
            </div>
            <div className="forgot"><Link to='/forgot-password' className='ppp'>Forgot Password?</Link></div>
          </div>
          <div className="login-footer">
            <button type="submit" className="submit-btn">Login</button>
            <div className="last">
              <div className="dont">Don't have an Account?</div>
              <div className="sign-up">
                <Link to='/signup' className='kkk'>Sign up</Link>
             </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
