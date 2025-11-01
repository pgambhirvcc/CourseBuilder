import React from "react";
import { useNavigate } from "react-router-dom";

export const DashboardPage = () => {

  const navigate = useNavigate();

  return (
    <div className="flex gap-4 justify-center items-center h-screen bg-gray-50 dark:bg-red-200">
      <button
        onClick={() => navigate('/create-courses')}
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Create a course +
      </button>
      <button
        onClick={() => navigate('/view-courses')}
        type="button"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        View all courses
      </button>
    </div>
  );
};
