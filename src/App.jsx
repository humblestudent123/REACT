import React from 'react';
import './App.css';

function App() {
  return (
    <div className="main">
     <div className="left">
      <img src="/images/Sona.png" alt="Sona logo" className="logo-image" draggable="false" />
    </div>

      <div className="right">
        <h2>Sona</h2>
        <h1>будь услышан</h1>
        <p>Начни сейчас.</p>

        <div className="auth-buttons">
          <button className="google">Регистрация с помощью Google</button>
          <button className="facebook">Регистрация с помощью Facebook</button>
        </div>

        <p className="or">или</p>

        <button className="start-now">Начни сейчас</button>

        <p className="terms">
          Регистрируясь, вы соглашаетесь с <a href="#">Условиями</a> и <a href="#">Политикой конфиденциальности</a>.
        </p>
      </div>
    </div>
  );
}

export default App;
