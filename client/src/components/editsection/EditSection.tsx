import React from 'react';
import Section from '../Section';


interface EditSectionProps {
}

const EditSection: React.FC<EditSectionProps> = ({}) => {
  return (
    <Section width="w-full">
      <div className="bg-gray-200 rounded p-4 w-fit">
        Edit
      </div>
    </Section>
  )
}

export default EditSection;
