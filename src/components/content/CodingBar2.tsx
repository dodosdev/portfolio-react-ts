import React from 'react';
import { Code } from '@interfaces/common';

type CodingBar2Props = {
    code: Code;
}

const CodingBar2: React.FC<CodingBar2Props> = ({code}) => {
    const {title, percent} = code;
    return (
        <>
            <div className="bar__metadata"><span>{title}</span><span>{percent}%</span></div>
            <div className="bar__bg"><div className="bar__value" style={{"width": `${percent}%`}}></div></div>
        </>
    );
}

export default CodingBar2;