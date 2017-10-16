import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <h1 className="container">React Prototypes!</h1>,
    document.getElementById('root')
);
function greeting(object){
    const element = (
        <div>
            <h1>Hello, {object.name} </h1>
            <h2 className={text-muted}>Your lucky number is object.luckyNumber</h2>
        </div>
    )
}
const name = 'Collin';
const luckyNumber =()=>{
    return Math.random()*500 >>1;
}

const userObject = {name,luckyNumber};

