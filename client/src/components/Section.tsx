import { ReactNode } from 'react';
import '../index.css';

type ContainerProps = {
  children: ReactNode;
  extendClass: string;
};

const Section = ({ children, extendClass }: ContainerProps) => {
  return (
    <div className={`place-self-center p-5 rounded border h-full ${extendClass}`}>
      {children}
    </div>
  );
};

export default Section;
