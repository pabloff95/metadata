import React, { ReactNode } from 'react';
import '../index.css';

type ContainerProps = {
  children: ReactNode;
};

const Section = ({ children }: ContainerProps) => {
  return (
    <div className="flex flex-col place-self-center w-11/12 p-5 rounded border h-full">
      {children}
    </div>
  );
};

export default Section;
