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
      <small className="mb-2 block text-xs">
        &copy; 2023 Huy. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">This website is built with </span>
        React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Github hosting.
      </p>
    </footer>
  );
}
