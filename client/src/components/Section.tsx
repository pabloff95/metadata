import { ReactNode } from 'react';
import '../index.css';

type ContainerProps = {
  children: ReactNode;
  width: string;
};

const Section = ({ children, width }: ContainerProps) => {
  return (
    <div className={`flex flex-col place-self-center p-5 rounded border h-full ${width}`}>
      {children}
    </div>
  );
};

export default Section;
