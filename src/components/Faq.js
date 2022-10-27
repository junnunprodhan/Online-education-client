import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-400">
          NodeJS programming language
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Is NodeJS a programming language?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Node. js is best defined as a JavaScript runtime that works on the famous and ultra-powerful V8 engine by JavaScript. In simpler terms, Node. js can be defined as a programming language that works well as a development runtime.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What is NodeJS used for?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind..{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Is node JS frontend or backend?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              A common misconception among developers is that Node. js is a backend framework and is only used for building servers. This isn't true: Node. js can be used both on the frontend and the backend.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Is Node.js a framework or library?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              js is actually not a framework or a library, but a runtime environment, based on Chrome's V8 JavaScript engine.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Why node js is used in react?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Node is the most popular platform for hosting and running web servers for React apps. After all, using NPM (Node Package Manager), you can install any package with NPM command-line interface CLI. Moreover, Node utilizes Webpack and other modules to turn a React application into an easily compilable single file.{" "}
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
