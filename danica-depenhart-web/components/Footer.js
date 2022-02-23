import React from "react";

export default function Footer() {
  return (
    <div className="overflow-hidden bg-transparent-200 absolute inset-x-1 bottom-0">
      <div className="max-w-6xl">
        <div className="flex flex-col align-middle md:space-y-4 md:flex-row justify-between md:items-center mt-8">
          <div className="text-slate-500 text-xxs">
            <div className="text-slate-500 text-xxs">
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
      </div>
    </div>
  );
}
