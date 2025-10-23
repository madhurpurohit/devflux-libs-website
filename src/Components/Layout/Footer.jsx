import React from "react";
// Corrected import to 'react-router-dom' for web projects
import { NavLink } from "react-router";

// Social Media Icon Component (Reusable)
const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 transition-colors duration-300 hover:text-cyan-400"
  >
    {children}
  </a>
);

// Main Footer Component
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Column 1: Brand and Description */}
          <div className="md:col-span-1 lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              DevFlux
            </h2>
            <p className="mt-4 max-w-sm text-gray-600 dark:text-gray-400">
              Your centralized hub for development cheat sheets, designed to
              empower developers to build faster and smarter.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider text-gray-800 uppercase dark:text-white">
              Quick Links
            </h3>
            {/* Updated to use two columns for links */}
            <div className="mt-4 flex space-x-12">
              {/* First Column */}
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="/html"
                    className="text-gray-600 transition-colors hover:text-cyan-500 dark:text-gray-400"
                  >
                    HTML
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/css"
                    className="text-gray-600 transition-colors hover:text-cyan-500 dark:text-gray-400"
                  >
                    CSS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/tailwindcss"
                    className="text-gray-600 transition-colors hover:text-cyan-500 dark:text-gray-400"
                  >
                    TailwindCSS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/javascript"
                    className="text-gray-600 transition-colors hover:text-cyan-500 dark:text-gray-400"
                  >
                    JavaScript
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/react"
                    className="text-gray-600 transition-colors hover:text-cyan-500 dark:text-gray-400"
                  >
                    React
                  </NavLink>
                </li>
              </ul>
              {/* Second Column */}
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="/react/axios"
                    className="text-gray-600 transition-colors hover:text-cyan-500 dark:text-gray-400"
                  >
                    Axios
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/react/router"
                    className="text-gray-600 transition-colors hover:text-cyan-500 dark:text-gray-400"
                  >
                    Router
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/react/reactquery"
                    className="text-gray-600 transition-colors hover:text-cyan-500 dark:text-gray-400"
                  >
                    ReactQuery
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/react/rtk"
                    className="text-gray-600 transition-colors hover:text-cyan-500 dark:text-gray-400"
                  >
                    ReduxToolkit
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/git"
                    className="text-gray-600 transition-colors hover:text-cyan-500 dark:text-gray-400"
                  >
                    Git
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider text-gray-800 uppercase dark:text-white">
              Connect
            </h3>
            <div className="mt-4 flex space-x-4 px-3">
              <SocialIcon href="https://www.instagram.com/madhur_purohit_">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.171 0-3.535.012-4.782.069-2.783.127-3.998 1.343-4.125 4.125-.057 1.248-.069 1.594-.069 4.782s.012 3.534.069 4.782c.127 2.783 1.342 3.998 4.125 4.125 1.247.057 1.611.069 4.782.069s3.535-.012 4.782-.069c2.783-.127 3.998-1.343 4.125-4.125.057-1.248.069-1.594.069-4.782s-.012-3.534-.069-4.782c-.127-2.783-1.342-3.998-4.125-4.125-1.247-.057-1.611-.069-4.782-.069zm0 4.136c-2.403 0-4.35 1.947-4.35 4.35s1.947 4.35 4.35 4.35 4.35-1.947 4.35-4.35-1.947-4.35-4.35-4.35zm0 7.252c-1.603 0-2.901-1.298-2.901-2.901s1.298-2.901 2.901-2.901 2.901 1.298 2.901 2.901-1.298 2.901-2.901 2.901zm4.865-7.825c-.633 0-1.145.513-1.145 1.145s.513 1.145 1.145 1.145c.632 0 1.145-.513 1.145-1.145s-.513-1.145-1.145-1.145z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://github.com/madhurpurohit">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12.019c0 4.435 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.019C22 6.477 17.523 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/madhur-purohit-686322209/">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://x.com/Madhurdotdev">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} DevFlux. All Rights Reserved.</p>
          <p className="mt-1">
            A project originally envisioned and created by{" "}
            <span className="font-semibold text-cyan-500">Madhur Purohit</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
