import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='m-12 grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 lg:grid-cols-5 md:grid-cols-2'>
           <div  className='col-span-1'>{courses.map((course,idx)=><p><Link to={`/courses/${course.id}`} key={idx}>{course.title}</Link></p>)}</div>
           <div className='grid col-span-4 grid-cols-1 gap-5 row-gap-8 lg:col-span-4 lg:grid-cols-3 md:grid-cols-1'>
            {courses.map(course=><Course key={course.id} course={course}></Course>)}
           </div>
        </div>
    );
};

export default Courses;