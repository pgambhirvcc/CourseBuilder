import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";

// Right now we just have a UI for showing signup page. (DONE)
// We want to setup the state mechanism (DONE)
// We want to call firebase functions for example signup

export const SignupPage = () => {
  const [userInformation, setUserInformation] = useState({
    email: "",
    password: "",
  });

  const handleSignup = async (event) => {
    // So that we don't refresh or call Action which we want to ignore as we are going to call an API(firebase)
    event.preventDefault();

    console.log(userInformation);
    // Here you will call firebase function

    const user = await createUserWithEmailAndPassword(auth, userInformation.email, userInformation.password);
    console.log(user, 'Created');

    alert('User Created');

  }

  return (
    <section className="bg-gray-50 dark:bg-green-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSignup}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  value={userInformation.email}
                  onChange={(event) =>
                    setUserInformation({
                      ...userInformation,
                      email: event.target.value,
                    })
                  }
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  value={userInformation.password}
                  onChange={(event) =>
                    setUserInformation({
                      ...userInformation,
                      password: event.target.value,
                    })
                  }
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login Here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
