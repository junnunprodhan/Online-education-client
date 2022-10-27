import React from "react";

const Course = ({course}) => {
  const {title,price,img,time}=course
  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">
            {title}
          </h2>
          <p className="dark:text-gray-100">
           price: {price}$
          </p>
          <p className="dark:text-gray-100">
           time: {time} minutes
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-900 text-white"
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default Course;
