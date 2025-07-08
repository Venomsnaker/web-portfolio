import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <p>
        This website is built following a tutorial of:{" "}
        <a
          className="text-orange-500"
          href="https://github.com/ByteGrad/portfolio-website.git"
          target="_blank"
        >
          {" "}
          ByteGrad{" "}
        </a>{" "}
      </p>
      <p>
        Credits: Lukas, Pixabay, and Pavlo 
      </p>
      <small className="mb-2 block text-xs">
        &copy; 2025 Huy. All rights reserved.
      </small>
    </footer>
  );
}
