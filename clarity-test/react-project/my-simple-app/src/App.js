import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Header Component
const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Simple React App</h1>
    </header>
  );
};

// Main Component
const Main = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
    setName('');
  };

  return (
    <main className="App-main">
      
      <section className="content-section">
        <h2>About This App</h2>
        <p>
          This is a simple React application that demonstrates basic functionality, including a counter. 
          You can increment or decrement the count using the buttons below.
        </p>
        <p>
          This application is built using React, which is a JavaScript library for building user interfaces. 
          It allows developers to create large web applications that can change data, without reloading the page.
        </p>
      </section>

      <section className="counter-section">
        <h2>Counter: {count}</h2>
        <div className="button-container">
          <button className="button" onClick={handleIncrement}>Increment</button>
          <button className="button" onClick={handleDecrement}>Decrement</button>
        </div>
      </section>

      <section className="form-section">
        <h2>Submit Your Name</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your name" 
            required 
          />
          <button className="button" type="submit">Submit</button>
        </form>
        {submittedName && <p>Thank you, {submittedName}!</p>}
      </section>

      <section className="image-section">
        <h2>Featured Image</h2>
        <p>
          This image represents a placeholder. You can replace this with your own images to add more context or 
          visuals to your application.
        </p>
      </section>

      <section className="list-section">
        <h2>Sample List of Items</h2>
        <ul>
          {Array.from({ length: 20 }, (_, index) => (
            <li key={index}>Item {index + 1}</li>
          ))}
        </ul>
      </section>

      <section className="footer-section">
        <Footer />
      </section>
    </main>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="App-footer">
      <p>© 2024 My Simple React App</p>
    </footer>
  );
};

// App Component
const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

export default App;
