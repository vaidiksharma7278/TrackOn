import React from 'react'
import {Link} from 'react-router-dom'
// import './main.css'
// const msg1="We increase\n your learning \n experience by"
// function View() {
//   return (
//     <div id='main'>
//         <div id="page1">
//             <h1>{msg1}</h1>
//             <h2>100X</h2>
//             <p>MeTrack provides hand-picked YouTube courses, {'\n'} real-time discussions, sharing projects, and getting
//             {'\n'} feedback on them. We believe in <b>Build-in public </b> and {'\n'} <b> Proof of Work.</b>
//             </p>
//             <button id="btn">EXPLORE COURSES</button>
//             <div id="pic">
//                 <img id="img1" src="https://www.metrack.tech/hero.png" alt=""/>
//                 <img id="img2" src="https://www.metrack.tech/overlay/react.webp" alt=""/>
//                 <img id="img3" src="https://www.metrack.tech/overlay/django.webp" alt=""/>
//                 <img id="img4" src="https://www.metrack.tech/overlay/code.webp" alt=""/>
//             </div>
//     </div>
//     </div>
    
//   )
// }
const View = () => {
  return (
    <header className="relative flex flex-col items-center justify-center w-full min-h-screen lg:gap-20 lg:flex-row">
      <div className="flex flex-col items-start justify-center w-full h-full lg:w-1/2">
        <h1 className="z-20 max-w-5xl text-5xl font-bold md:text-6xl" id='head'>
          We increase your {" "}learning experience by{" "}
          <span className="text-6xl font-extrabold text-transparent md:text-8xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
            100X
          </span>
        </h1>
        <p className="z-20 max-w-xl mt-2 text-sm text-gray-400 md:text-lg">
          TrackOn provides hand-picked YouTube courses, real-time discussions,
          sharing projects, and getting feedback on them. We believe in{" "}
          <span className="font-bold text-blue-500">Build-in public</span> and{" "}
          <span className="font-bold text-blue-500">Proof of Work</span>.
        </p>
        <Link to="/explore"> 
          <button className="mt-8 bg-blue-200 btn btn-ghost btn-wide hover:bg-blue-300" id='butt'>
            Explore Courses
          </button>
         </Link> 
      </div>

      <div className="relative w-full h-full p-2 mt-10 lg:mt-0 md:w-11/12 lg:w-1/2">
        <img
          alt="overlay"
          src="https://www.metrack.tech/overlay/react.webp"
          className="absolute h-40 -top-10 md:top-0 -left-10 md:-left-20"
        />
        <img
          alt="overlay"
          src="https://www.metrack.tech/overlay/code.webp"
          className="absolute h-48 -bottom-20 md:-bottom-28 -right-10 md:-right-10"
        />
        <img
          alt="overlay"
          src="https://www.metrack.tech/overlay/django.webp"
          className="absolute bottom-0 hidden h-48 lg:block md:-bottom-20 -left-10 md:-left-16"
        />
        <div className="w-full h-5/6 rounded-3xl bg-blue-50">
          <img
            alt="overlay"
            src="https://www.metrack.tech/hero.png"
            className="object-cover object-top w-full h-64 md:h-96 lg:h-full rounded-3xl"
          />
        </div>
      </div>
    </header>
  );
};


export default View;