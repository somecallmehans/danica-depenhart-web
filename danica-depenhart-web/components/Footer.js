import React from "react";

export default function Footer() {
  return (
    <div className="bg-transparent-200">
      <div className="max-w-6xl mx-auto px-4 md:py-20">
        <div className="flex flex-col md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div className="text-black text-xs">
            <p>&copy; Danica Depenhart. All Rights Reserved</p>
          </div>
          <div className="text-black text-xs">
            <p>
              Developed by
              <div className="inline-block">
                <a
                  className="hover:bg-black-500 rounded-md px-2 py-1 hover:text-white-50"
                  href="https://www.linkedin.com/in/christian-anderson-pgh/"
                >
                  Christian Anderson
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
