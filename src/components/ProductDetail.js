import React from 'react';
import Select from 'react-select';
import { useState } from 'react';

import './ProductDetail.css'

export default function ProductView(){

    const [isExpanded, setIsExpanded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const text = 'Lorem ipsum Minim deserunt culpa voluptate ipsum enim ex aliqua labore aliquip dolore laborum amet velit. Esse et non quis enim. Aute aliqua mollit fugiat laboris dolore laboris est eiusmod dolor veniam voluptate laborum proident. Sunt deserunt dolore pariatur aute aute sunt et nulla irure laborum dolore.';
    
    const options = [
        { value: '', label: 'Please select a size' },
        { value: 'Medium', label: 'Medium' },
        { value: 'Large', label: 'Large' },
        { value: 'X Large', label: 'X Large' },
        { value: 'XX Large', label: 'XX Large' },
    ];

    function goBack(){
        window.history.back()
        console.log(window.history)
    };

    function handleImageLoad(){
        setIsLoading(false);
    };

    function toggleText(){
        setIsExpanded((prevState) => !prevState);
    };

    return(
        <div className="product-detail container">
            <a href={window.history.back} onClick={goBack} className="btn btn-link text-decoration-none text-dark"><i className="bi bi-arrow-left"></i> Back</a>
            <div className="row product-detail-row justify-content-around align-items-center">
                <div className="col-md-6 product-detail-img">
                    <img style={{display: isLoading && ("none")}} className="img-fluid" onLoad={handleImageLoad} src="https://m.hng.io/catalog/product/9/6/962627_dark_green_1.jpg?io=PDP" alt=""/>
                    {isLoading && (
                        <div className='loading'>
                            <i className="bi bi-arrow-clockwise load"></i>
                        </div>
                    )}
                </div>

                <div className="col-md-4">
                    <p className='lead fw-normal'>Bouclé tweed blazer</p>
                    <p className='fw-light mb-3'>Ksh 10000</p>
                    <div className='d-flex'>
                        <p className='fw-light' style={{fontSize: "small"}}>
                            {isExpanded ? text : `${text.slice(0, 100)}...`}
                            <p style={{fontSize: "small"}} className='fw-normal text-success read-more-less' onClick={toggleText}>
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </p>
                        </p>
                    </div>
                    <Select options={options} />
                    <button className='btn btn-dark text-center mt-3 add-cart'>ADD TO BAG</button>
                </div>
            </div>
        </div>
    )
}