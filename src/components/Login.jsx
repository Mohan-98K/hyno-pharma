import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Login.css';

const ads = [
  { img: 'https://images.unsplash.com/photo-1588776814546-85e56d4ecf3a', title: 'Fast Delivery', text: 'Medicines delivered in 2 hours in major cities.' },
  { img: 'https://images.unsplash.com/photo-1580281657521-3892d2601a5a', title: 'Doctor Consultation', text: 'Consult certified doctors anytime online.' },
  { img: 'https://images.unsplash.com/photo-1600959907703-1596fd2e0d05', title: 'Exclusive Offers', text: 'Amazing discounts every day for our customers.' },
];

const floatingItems = [
  '💊', '🩺', '🧴', '🧾', '💉', '🌿'
];

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd(prev => (prev + 1) % ads.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Login successful! (Demo)');
    }, 2000);
  };

  const handleSocialLogin = (provider) => {
    alert(`${provider} login would be implemented here`);
  };

  return (
    <div className="login-split-container">
      {/* Left Side - Login Form */}
      <motion.div
        className="login-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="login-card">
          <motion.div
            className="login-header"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="logo"><FaUser className="logo-icon" /></div>
            <h1>Welcome Back</h1>
          </motion.div>

          <motion.form
            className="login-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-group">
                <FaUser className="input-icon" />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" required />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-group">
                <FaLock className="input-icon" />
                <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter your password" required />
                <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />
                <span className="checkmark"></span> Remember me
              </label>
              <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
            </div>

            <motion.button type="submit" className="btn btn-primary login-btn" disabled={isLoading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              {isLoading ? 'Signing In...' : 'Sign In'}
            </motion.button>
          </motion.form>

          <motion.div className="divider" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}><span>or</span></motion.div>

          <motion.div className="social-login" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <button className="btn btn-google" onClick={() => handleSocialLogin('Google')}><FaGoogle /> Continue with Google</button>
            <button className="btn btn-facebook" onClick={() => handleSocialLogin('Facebook')}><FaFacebook /> Continue with Facebook</button>
          </motion.div>

          <motion.div className="signup-link" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Animated Advertisement Carousel */}
      <motion.div className="login-right" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
        <div className="ad-carousel">
          <AnimatePresence mode="wait">
            <motion.div key={currentAd} className="ad-card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
              <img src={ads[currentAd].img} alt={ads[currentAd].title} />
              <motion.div className="ad-content" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                <h2>{ads[currentAd].title}</h2>
                <p>{ads[currentAd].text}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          {/* Floating icons */}
          {floatingItems.map((icon, idx) => (
            <motion.div
              key={idx}
              className="floating-icon"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 50, opacity: 1 }}
              transition={{ repeat: Infinity, duration: 6 + idx, repeatType: "reverse", delay: idx * 0.5 }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
