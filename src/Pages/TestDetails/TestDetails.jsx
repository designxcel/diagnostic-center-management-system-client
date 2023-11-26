import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TestDetails = () => {
    const detailsOfTest = useLoaderData()
    const {name, price} = detailsOfTest
    return (
        <div>
            <h2>Details page of test:{name}</h2>
            <p>{price}</p>
        </div>
    );
};

export default TestDetails;