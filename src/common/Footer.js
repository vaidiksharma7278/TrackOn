import React from "react";
import logo from "../Images/logo.png"
const Footer = () => {
  return (
    <footer className="body-font">
      <div className="flex flex-col items-center w-10/12 px-5 py-8 mx-auto sm:flex-row">
        <a className="flex items-center justify-center font-medium title-font md:justify-start">
          <img alt="logo" src={logo} className="object-contain w-13 h-9" />
          <h1 className="hidden ml-2 font-bold tracking-tight uppercase cursor-pointer  lg:block">
            <span className="text-3xl text-blue-500">Track</span>ON
          </h1>
        </a>
        <p className="mt-4 text-sm text-center text-gray-700 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0">
          © 2022 TrackOn —
          <a
            href="https://www.linkedin.com/in/vaidik-sharma-5806a1117/"
            className="ml-1 text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            @vaidiksharma
          </a>{" "}
          
          
        </p>
        {/* <span className="inline-flex items-center justify-center gap-2 mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
          <img
            alt="linode"
            src="https://www.linode.com/wp-content/uploads/2021/01/Linode-Logo-Black.svg"
            className="h-5"
          />{" "}
          X <img alt="logo" src="./logo.png" className="h-5" />
        </span> */}
      </div>
    </footer>
  );
};

export default Footer;
