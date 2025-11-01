import React from "react";

export const CourseCard = (props) => {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      <div className="flex items-center gap-x-4 text-xs">
        <time datetime="2020-03-16" className="text-gray-400">
         {props.course.createdAt}
        </time>
        <a
          href="#"
          className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-800"
        >
          Category: {props.course.category}
        </a>
      </div>

      <div>
        <img src={props.course.image} alt="" />
      </div>
      <div className="group relative grow">
        <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
          <a href="#">
            <span className="absolute inset-0"></span>
           {props.course.title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">
         {props.course.description}
        </p>
      </div>
    </article>
  );
};
