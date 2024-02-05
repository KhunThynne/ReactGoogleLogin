import React, { ReactNode } from 'react';

type TestTProps = {
  test?: string;
  children?: ReactNode; 
};

const TestT: React.FC<TestTProps> = ({ test="Doo", children }) => {
  return (
    <div>
      <p>{test}</p>
      <div>{children}</div>
    </div>
  );
};

export default TestT;
