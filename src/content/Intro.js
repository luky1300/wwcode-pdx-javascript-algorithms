import React from 'react';

export default function Intro() {
  return (
    <div className="introduction">
      <h3 className="app-header">Introduction</h3>
      <h5 className="section-header">What is an algorithm?</h5>
      <p>A sequence of well-defined instructions to solve a problem</p>
      <h5 className="section-header">Why are they important?</h5>
      <ul>
        <li>Interviews - Like it or not they're here to stay</li>
        <li>Problem solving capability - Solving these actually do help</li>
      </ul>
      <h5 className="section-header">Big O Notation</h5>
      <p>
        A way of classifying the space and time requirements of algorithms as
        their input grows.
      </p>
      <p>Space (variables)</p>
      <p>Time (iterations)</p>
      <img
        src="https://www.cdn.geeksforgeeks.org/wp-content/uploads/mypic.png"
        alt="Big O Notation Example"
      />
      <h5 className="section-header">Strategy</h5>
      <ol>
        <li>Take a deep breath</li>
        <li>Ask a TON of questions</li>
        <li>
          You can only work with what you know (but it doesn’t hurt to mention
          what you would Google)
        </li>
        <li>Talk through your thought process</li>
        <li>Break the problem down into smaller pieces</li>
        <li>
          Come up with a brute-force solution and the optimize as you go on
        </li>
        <li>
          Match the problem to existing algorithm solutions you know (practice
          helps a lot here)
        </li>
      </ol>
      <h5 className="section-header">General Types of Algorithm Questions</h5>
      <ul>
        <li>String</li>
        <li>Array</li>
        <li>Matrix</li>
        <li>Linked List</li>
        <li>Tree</li>
        <li>Heap</li>
        <li>Graph</li>
        <li>Sorting</li>
        <li>Dynamic Programming</li>
        <li>Bit Manipulation</li>
        <li>Math</li>
        <li>HashMap</li>
        <li>...</li>
      </ul>
    </div>
  );
}
