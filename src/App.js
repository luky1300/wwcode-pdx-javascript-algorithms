import React from 'react';
import References from './content/References';
import Intro from './content/Intro';
import ExampleProblems from './exampleProblems/ExampleProblems';
import PracticeProblems from './practiceProblems/PracticeProblems';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Women Who Code Portland</h1>
        <h2>JavaScript Algorithms</h2>
        <a
          href="https://docs.google.com/presentation/d/18KhXyQ0V7kYA9k8Np40R2lH92rUPMS9jalR3o3MZixg/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get the slides!
        </a>
      </header>
      <Intro />
      <ExampleProblems />
      <PracticeProblems />
      <References />
    </div>
  );
}

export default App;
