import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='m-12'>
           <div>{courses.map(course=><p><Link key={course.id}>{course.title}</Link></p>)}</div>
           <div>
            {courses.map(course=><Course key={course.id} course={course}></Course>)}
           </div>
        </div>
    );
};

export default Courses;