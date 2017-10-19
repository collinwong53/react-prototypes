import React from 'react';
import Table from './table';
const students =
    [{
        name : 'Billy B',
        course: 'Criminal Justice',
        grade: 94
    },
    {
        name:'Pikachu',
        course:'Forensic Science',
        grade: 98
    },
    {
        name: 'Superman',
        course: 'Creative Writing',
        grade: 86
    }]
export default() => {
    return (
        <div className="container">
        <h1>Student Grade Table</h1>
        <Table data={students}/>
        </div>
    )}

