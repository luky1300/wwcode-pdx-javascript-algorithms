import React from 'react';
import Problem from '../components/Problem';

export default function Palindromes() {
  // Solve the problem here
  const palindromes = (input) => {
    return true;
  };
  const example1Input = 'A man, a plan, a canal: Panama';
  const example2Input = 'race a car';

  return (
    <Problem
      title="Palindromes"
      problem="Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases."
      note="For the purpose of this problem, we define empty string as valid palindrome."
      source="https://leetcode.com/problems/valid-palindrome/"
      example1Input={example1Input}
      example1Output={true}
      example1Answer={palindromes(example1Input)}
      example2Input={example2Input}
      example2Output={false}
      example2Answer={palindromes(example2Input)}
    />
  );
}
