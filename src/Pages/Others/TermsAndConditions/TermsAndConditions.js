import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>Here is our terms and conditons </h3>

            <p>Go Back To Registration  : <Link to='/register'>
            Register
            </Link>
            </p>
        </div>
    );
};

export default TermsAndConditions;