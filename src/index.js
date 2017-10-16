import React from 'react';
import ReactDOM from 'react-dom';

function greeting(object){
    const element = (
        <div>
            <h1>Hello, {object.name} </h1>
            <h2 className="text-muted">Your lucky number is {object.luckyNumber()}</h2>
        </div>
    );
    ReactDOM.render(
        element,document.getElementById('root')
    )
}
const name = 'Collin';
const luckyNumber =()=>{
    return Math.random()*1000 >>1;
};

const userObject = {name,luckyNumber};

greeting(userObject);