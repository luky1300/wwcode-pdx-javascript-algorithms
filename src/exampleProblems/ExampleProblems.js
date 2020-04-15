import React from 'react';
import Palindromes from './Palindromes';
import NthSmallestItem from './NthSmallestItem';

export default function ExampleProblems() {
  return (
    <div className="introduction">
      <h3 className="app-header">Example Problems</h3>
      <Palindromes />
      <hr className="problem-separator" />
      <NthSmallestItem />
    </div>
  );
}
