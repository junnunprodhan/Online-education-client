import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
  const cousrsDetails =useLoaderData();
  console.log(cousrsDetails)
  const {img,title,price,time,author,disc}=cousrsDetails;
  const ref = React.createRef();
  return (
    <div className="text-center">
       <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf} className='text-center mt-12 inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide bg-slate-700 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'>Download pdf</button>}
      </Pdf>
      <div ref={ref}>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
     
      <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
        <img
          className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
          src={img}
          alt=""
        />
      </div>
      <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          {title}{' '}
          <span className="inline-block text-deep-purple-accent-400">
            programming laguage
          </span>
        </h2>
        <p className="mb-5 text-base text-gray-700 md:text-lg">
         {disc}
        </p>
        <p className="mb-5 text-base text-gray-700 md:text-lg">
         Isntructor : {author}
        </p>
        <p className="mb-5 text-base text-gray-700 md:text-lg">
         Duration : {time} minutes
        </p>
        <p className="mb-5 text-base text-gray-700 md:text-lg">
         Price :{price}$
        </p>

        <div className="flex items-center md:justify-center">
          <button>
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide bg-slate-700 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
           Get Premium Access
          </Link>
          </button>
          
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default CourseDetails;
