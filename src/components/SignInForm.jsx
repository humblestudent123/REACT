import React, { useState } from 'react';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert('Введите корректный email.');
      return;
    }

    if (password.length < 6) {
      alert('Пароль должен содержать минимум 6 символов.');
      return;
    }

    // Успешный вход
    window.location.href = 'home.html';
  };

  return (
    <main style={{ maxWidth: '350px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fafafa' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '24px' }}>Moxo</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>
          Email address
        </label>
        <input
          id="email"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 12px',
            marginBottom: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
          }}
          required
        />

        <label htmlFor="password" style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>
          Password
        </label>
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 12px',
            marginBottom: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
          }}
          required
        />

        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              style={{ marginRight: '8px' }}
            />
            Show password
          </label>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
            <input type="checkbox" style={{ marginRight: '8px' }} />
            Remember me
          </label>
        </div>

        <button
          type="button"
          onClick={handleSignIn}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#007bff',
            color: '#fff',
            fontWeight: '600',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = '#0056b3')}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = '#007bff')}
        >
          Sign in
        </button>

        <p style={{ marginTop: '24px', textAlign: 'center', color: '#666', fontSize: '12px' }}>
          &copy; 2017–2025
        </p>
      </form>
    </main>
  );
}
