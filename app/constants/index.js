import {
    backend,
    web,
    typescript,
    html,
    css,
    reactjs,
    redux,
    nodejs,
    mongodb,
    git,
    figma,
    sass,
    angular,
    airbnb,
    myDay,
    threejs,
  } from "public/assets"
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ]
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ]
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "sass",
      icon: sass,
    },
    {
      name: "angular",
      icon: angular,
    }
  ]
  
  const projects = [
    {
      name: "Airbnb",
      description:
        "Clone of Airbnb project vacation rental app end to end application – used Angular framework with Typescript, Rxjs , Node.js REST API, Express, MongoDB, websockets with Socket.io, deployment with render. Responsive design using SASS, complete CRUD.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "google-map",
          color: "orange-text-gradient",
        },
        {
          name: "i18n",
          color: "pink-text-gradient",
        },
      ],
      image: airbnb,
      source_code_link: "https://github.com/oferGavrilov/AirBNB-Frontend-clone",
      app_link: "https://airbnb-rktw.onrender.com/"
    },
    {
      name: "My-Day'",
      description:
        "Clone of Monday project management app end to end application – used React framework with MVC & React hooks, Redux state management, Node.js REST API, Express, MongoDB, websockets with Socket.io, deployment with render. Responsive design using SASS, complete CRUD, react beautiful dnd (drag and drop).",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "socket.io",
          color: "orange-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
      ],
      image: myDay,
      source_code_link: "https://github.com/idandavid1/My-Day",
      app_link: "https://monday-8oy3.onrender.com/"
    },
  ]
  
  export { services, technologies, projects }