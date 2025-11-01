import React, { useEffect, useState } from "react";
import { CourseCard } from "../components/CourseCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Link } from "react-router-dom";

// Right now we just have a UI for Viewing courses. (DONE)
// We want to setup the state mechanism (DONE)
// We want to call firebase functions for example signup (DONE)

export const ViewCoursesPage = () => {

  //   Create course reference
  const courseReference = collection(db, "courses");

  const [coursesList, setCoursesList] = useState([]);


  useEffect(() => {
    getCourses();
  }, []);


  const getCourses = async () => {
    const courseSnapshot = await getDocs(courseReference); 
    const courses = courseSnapshot.docs.map((doc) => {
        return doc.data()
    });

    console.log(courses, 'couresList');

    setCoursesList(courses);
  }

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
        <Link to={'/dashboard'} className="text-white ml-8">Go to Dashboard</Link>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
            View All Blogs here!
          </h2>
        </div>

        <div>
            <hr />
        </div>

        {/* Run a loop over the list of courses we have */}
        <div className="grid grid-cols-4 gap-4">
        {
            coursesList.length > 0 && coursesList.map((course) => <CourseCard course={course} />)
        }
        </div>
      </div>
    </div>
  );
};
