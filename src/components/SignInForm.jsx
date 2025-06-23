import React, { useState } from 'react';
import './SignInForm.css';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert('Введите корректный email.');
      return;
    }

    if (password.length < 6) {
      alert('Пароль должен содержать минимум 6 символов.');
      return;
    }

    // Переход при успешной проверке
    window.location.href = 'home.html';
  };

  return (
    <div className="form-container">
      <main className="form-signin">
        <form>
          <div className="h1">
            <h1>Moxo</h1>
          </div>

          <div className="form-floating">
            <input
              type="email"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating">
            <input
              type={showPassword ? 'text' : 'password'}
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPassword">Show password</label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              id="checkDefault"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="checkDefault">Remember me</label>
          </div>

          <button
            id="btn"
            type="button"
            onClick={handleSubmit}
            className="submit-button"
          >
            Sign in
          </button>

          <p className="footer">&copy; 2017–2025</p>
        </form>
      </main>
    </div>
  );
}
