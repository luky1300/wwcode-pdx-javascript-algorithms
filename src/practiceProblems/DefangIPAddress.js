import React from 'react';
import Problem from '../components/Problem';

export default function DefangIPAddress() {
  const defangIPAddress = (input) => {
    return 'output';
  };
  const example1Input = '1.1.1.1';
  const example2Input = '255.100.50.0';

  return (
    <Problem
      title="Defang IP Address"
      problem="Given a valid IPV4 address, return a defanged version of that address. A defanged address replaces every period “.” with “[.]”. "
      note="The given address will always be a valid IPV4 address."
      source="https://leetcode.com/problems/defanging-an-ip-address/"
      example1Input={example1Input}
      example1Output="1[.]1[.]1[.]1"
      example1Answer={defangIPAddress(example1Input)}
      example2Input={example2Input}
      example2Output="255[.]100[.]50[.]0"
      example2Answer={defangIPAddress(example2Input)}
    />
  );
}
