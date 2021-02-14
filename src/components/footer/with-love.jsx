import React from 'react';
import './with-love.css';


const MadeWithLove = ({ githubProfile }) => (
    <small>
        Made with&nbsp;
        <span
            role="img"
            aria-label="love"
            title="love"
        >&#10084;</span> by&nbsp;
        
             {/* href={`${githubProfile}`}
            target="_blank"
            rel="noopener noreferrer" */}
        ASMA
    </small>
);

export default MadeWithLove;
