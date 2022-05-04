import React from "react";

export default function Footer() {
  return (
    <div className="overflow-hidden absolute w-full h-8 bottom-0 left-0 right-0 mb-0 mt-8 w-full mx-auto">
      <div className="text-black text-xxs text-center">
        <div className="text-black text-xxs">
          <p>&copy; danica depenhart. All Rights Reserved</p>
        </div>
        <p>
          <div className="inline-block">
            <a
              className="hover:bg-black-500 rounded-md px-2 py-1 hover:text-white-50"
              href="https://www.linkedin.com/in/christian-anderson-pgh/"
            >
              developed by christian anderson
            </a>
          </div>
        </p>
      </div>
    </div>
  );
}
