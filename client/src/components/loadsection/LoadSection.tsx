import React from 'react';
import Section from '../Section';
import LoadFileButton from './LoadFileButton';

interface LoadSectionProps {
}

const LoadSection: React.FC<LoadSectionProps> = () => {
  return (
    <Section>
        <LoadFileButton name='Load'></LoadFileButton>
    </Section>
  );
};

export default LoadSection;

