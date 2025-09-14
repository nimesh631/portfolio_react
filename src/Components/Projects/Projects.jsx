import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div id="Projects" className="p-10 md:p-12 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center mt-10">
        Projects
      </h1>
    <div className="py-12 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-30 gap-y-5"> 
        <ProjectCard
          title="Fullstack Expense Tracker"
          text="Repo"
          main="Built a full-stack Expense Tracker with NestJS, TypeORM, and PostgreSQL, featuring JWT authentication and DTO validation. Developed a React (TypeScript) frontend with TailwindCSS for expense CRUD operations. Implemented secure API integration and toast-based user feedback."
          Link="https://github.com/nimesh631/ExpenseTrackerFullStack"
        />
        <ProjectCard
          title="Fullstack Task Management App"
          text="Repo"
          main="React + NestJS CRUD with JWT auth and PostgreSQL.Task tracker with secure login and REST APIs.
.Responsive UI with authentication and database integration.
"
          Link="https://github.com/nimesh631/TaskTodoFullStack"
        />
        <ProjectCard
          title="Job Portal Backend"
          text="Repo"
          main="Built with NestJS, TypeORM, PostgreSQL, and TypeScript, CRUD, JWT authentication, and role-based authorization.
"
          Link="https://github.com/nimesh631/JobPortal"
        />

        <ProjectCard
          title="Todo"
          text="Demo"
          main="Feature-rich Todo App built with React and Redux Toolkit that offers complete CRUD operations and data persistence via Local Storage. Streamlined task management with an intuitive interface."
          Link="https://nimesh631.github.io/ReduxToolKitTodo/"
        />
        <ProjectCard
          title="Expense Tracker"
          text="Demo"
          main="A simple and responsive expense tracking web app built with React, Redux Toolkit, and Vite. Users can add income and expense transactions, view real-time balance updates, and track financial summaries."
          Link="https://nimesh631.github.io/reduxtoolkitExpenseTracker/"
        />
        <ProjectCard
          title="Fake API Frontend"
          text="Repo"
          main="This is a Fake API having responsive product list page with pagination, dynamic routing.
"
          Link="https://github.com/nimesh631/TaskProductApi"
        />

            <ProjectCard
          title="Live User Search"
          text="Repo"
          main="Developed a responsive project implementing live user search with debounce to optimize API calls and improve performance, display user data efficiently, providing smooth and real-time search experience.
"
          Link=" https://github.com/nimesh631/LiveUserSearchDebounce"
        />
        <ProjectCard
          title="Currency"
          text="Demo"
          main="This is a Currency Convertor App created using react. It makes use of Reusable components"
          Link="https://nimesh631.github.io/chai-aur-react/"
        />
        <ProjectCard
          title="Quiz"
          text="Demo"
          main="A dynamic Quiz Game website built with JavaScript, event handling for interactive UX, tracks and displays user scores, and utilizes query selectors for efficient DOM manipulation and content updates"
          Link="https://nimesh631.github.io/Quiz/"
        />
      </div>
    </div>
  );
}

export default Projects;
