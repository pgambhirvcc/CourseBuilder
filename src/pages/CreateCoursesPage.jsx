import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { Link } from "react-router-dom";

// Course Page (UI)
// Name
// Description
// Image (Optional)
// Category
// Call Firebase Store to save these information

// Right now we just have a UI for Creating courses. (DONE)
// We want to setup the state mechanism (DONE)
// We want to call firebase functions for example signup (DONE)

export const CreateCoursesPage = () => {
  const [courseInfo, setCourseInfo] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
  });

//   Create course reference
  const courseReference = collection(db, "courses");

  const handleCourseCreation = async (event) => {
    event.preventDefault();

    try {
        await addDoc(courseReference, courseInfo);
        alert('Course Added succesfully');
    } catch(error) {
        alert('There was an error creating course');
        console.log('There was an error creating course', error);
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-green-900">
    <Link to={'/dashboard'} className="text-white ml-8">Go to Dashboard</Link>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-2 space-y-2 md:space-y-2 sm:p-4">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create a Course +
            </h1>
          </div>

          <form action="" onSubmit={handleCourseCreation}>
            <div className="p-2 space-y-2 md:space-y-2 sm:p-4">
              <label
                for="base-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Course Title
              </label>
              <input
                value={courseInfo.title}
                onChange={(event) =>
                  setCourseInfo({ ...courseInfo, title: event.target.value })
                }
                type="text"
                id="base-input"
                placeholder="Enter course Title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="p-2 space-y-2 md:space-y-2 sm:p-4">
              <label
                for="base-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Add Image Url
              </label>
              <input
                value={courseInfo.image}
                onChange={(event) =>
                  setCourseInfo({ ...courseInfo, image: event.target.value })
                }
                type="text"
                id="base-input"
                placeholder="Enter Image Url"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="p-2 space-y-2 md:space-y-2 sm:p-4">
              <label
                for="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Course Description
              </label>
              <textarea
                value={courseInfo.description}
                onChange={(event) =>
                  setCourseInfo({
                    ...courseInfo,
                    description: event.target.value,
                  })
                }
                id="description"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Add course Description..."
              ></textarea>
            </div>

            <div className="p-6 space-y-2 md:space-y-2 sm:p-4">
              <label
                for="categories"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                value={courseInfo.category}
                onChange={(event) =>
                  setCourseInfo({ ...courseInfo, category: event.target.value })
                }
                id="categories"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a Category</option>
                <option value="cs">Computer Science</option>
                <option value="it">Information Technology</option>
                <option value="bm">Business Management</option>
                <option value="hr">Human Resource</option>
              </select>
            </div>

            <div className="p-6 text-center space-y-2 md:space-y-2 sm:p-4">
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Create+
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
