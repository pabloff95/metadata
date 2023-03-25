import React from 'react';
import Section from '../Section';

interface ResultSectionProps {
    message:string;
}

const ResultSection: React.FC<ResultSectionProps> = ({message}) => {
    return (
        <Section>
            <div className="bg-gray-200 rounded p-4 w-fit">
                <p>{message}</p>
            </div> 
        </Section>
    )
}

export default ResultSection;