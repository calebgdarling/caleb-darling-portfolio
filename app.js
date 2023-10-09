import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <Contact />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
