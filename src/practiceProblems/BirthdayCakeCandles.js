import React from 'react';
import Problem from '../components/Problem';

export default function BirthdayCakeCandles() {
  // Solve the problem here
  const birthdayCakeCandles = (inputArray, n) => {
    return 0;
  };

  return (
    <Problem
      title="Birthday Cake Candles"
      problem="You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out."
      note="N will be between 1 and 100"
      source="https://www.hackerrank.com/challenges/birthday-cake-candles/problem"
      example1Input="([4, 4, 1, 3], 4)"
      example1Output={2}
      example1Answer={birthdayCakeCandles([4, 4, 1, 3], 4)}
      example2Input="([3, 2, 1], 3)"
      example2Output={1}
      example2Answer={birthdayCakeCandles([3, 2, 1], 3)}
    />
  );
}
