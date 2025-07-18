import React from "react";
import Navbar from "../Navigation/Navbar";

const team = [
  
  {
    name: "Jyoti Palariya",
    img: "./images/jyoti.jpg",
    msg: " Passionate about frontend and design.",
    roleDetail: " I Jyoti Palariya handling  the frontend UI using React and Material-UI. She styled the page using custom classes, ensured responsiveness, and designed intuitive input fields and result areas for a smooth user experience.",
  },

  {
    name: "Mamta Pawar",
    img: "./images/mamta.jpg",
    msg:  "Loves working with databases & APIs.",
    roleDetail:  " I Mamta responsible for integrating backend data handling. She managed state persistence using Firebase and explored options to store simulation results .",
    
  },
  {
    name: "KM Babita",
    img: "./images/babita.jpg",
    msg: "Focused on backend and logic building.",
    roleDetail: " I Babita  implemented the core logic for page replacement algorithms such as FIFO, LRU, MRU, and OPR. She ensured the algorithms worked correctly with dynamic user inputs and handled edge cases like invalid or negative input gracefully.",
  },
  {
    name: "Nivedita Bhatt",
    img: "./images/nivedita.jpg",
    msg: "Ensures the app is bug-free and smooth.",
    roleDetail:
      "I Nivedita took charge of testing and debugging. She tested all algorithm outputs under various inputs, fixed logical and UI bugs, and ensured that all error messages, validations, and reset functionality worked perfectly.",
  },
];

const About = () => {
  return (
    <>
      <Navbar />

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            About Us
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            This project is developed by our dedicated team members.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 transition-all duration-300 transform border rounded-xl shadow-md cursor-pointer hover:scale-105 hover:bg-red-600 hover:text-white dark:border-gray-700"
              >
                <img
                  className="object-cover w-24 h-24 mb-4 rounded-full ring-2 ring-red-600"
                  src={member.img}
                  alt={member.name}
                />
                <h2 className="text-xl font-semibold capitalize text-white">{member.name}</h2>
                <p className="mt-2 text-center  text-white text-sm">{member.msg}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
