import React from 'react';
import Problem from '../components/Problem';

export default function EvenNumberDigits() {
  // Solve the problem here
  const evenNumberDigits = (inputArray) => {
    return 0;
  };

  return (
    <Problem
      title="Find Numbers with Even Number of Digits"
      problem="Given an array nums of integers, return how many of them contain an even number of digits."
      source="https://leetcode.com/problems/find-numbers-with-even-number-of-digits/"
      example1Input="[12,345,2,6,7896]"
      example1Output={2}
      example1Answer={evenNumberDigits([12, 345, 2, 6, 7896])}
      example2Input="[555,901,482,1771]"
      example2Output={1}
      example2Answer={evenNumberDigits([555, 901, 482, 1771])}
    />
  );
}
