export const HeaderText =
[
  {
    text1: "Welcome! 👋",
    text2: "I'm Szebasztián Márton",
    text3: "Szebasztián Márton",
    text4: "I'm excited to have you visit my portfolio!",
    text5: "My portfolio",
    text6: "I am a frontend developer.",
    text7: "I'm excited to have you visit my portfolio!",
    text8: "I'm glad to see you here!"
  }
]


//Home Text 

export const HomeText =
[
    {
        title:"Dominik Antal Vastagh",
        subtitle:"Frontend Developer",
        description:"As a passionate frontend developer, I leverage design principles and creativity to build captivating web experiences.",
        button:"Get in Touch",
        //Footer Copyright Text. 
        // The copyright year is automatically renewed
        copy:"All rights are reserved"

    }
];
export const AboutText =
[
    //About.jsx TEXT
    {
        title:"About me",
        subtitle:"A short introduction",
        description:"Quickly pick up new concepts and technologies. I excel in dynamic environments and love adapting to the latest trends in frontend development.",
        //CV Download BUTTON 
        button:"Download CV",
        //Box 1 
        title1:"Professional Journey",
        subtitle1:"2+ Years of Growth",
        //Box 2
        title2:"Completed",
        subtitle2:"8 Projects",
        //Box 3
        title3:"Currently Learning",
        subtitle3:"I'm delving into advanced JS frameworks"
    }
] ;

//Social Links

export const Sociallinks =
[
    {
        facebook: "https://www.facebook.com",
        instagram: "https://www.instagram.com",
        linkedin: "www.linkedin.com",
        github: "https://www.github.com",
        x: "https://twitter.com",
        youtube:"",
        mail:"DominikAntalVastagh@hotmail.com",   
    }
];

//Project Text:
export const projectsData = [
  //Badgelist: AndroidStudio, Arduino, AWS, Azure, Css, Dart, Git, HTML, Htmx, Illustrator, Java, JavaScript, JQuery, Kubernetes, Laravel, Less, MongoDB, MySQL, Netlify, 
  //           Nginx, Node, Notion, Npm, React, Sass, Svelte, Swift, TailwindCSS, VueJS, WebAssembly, XD, Yarn 
    {
      id: 1,
      category: "React",
      image: Project1,
      title: "Pizza ordering",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      badge: 
        [
          { name: React, url: "ReactBadge" },
          { name: Node, url: "NodeBadge" },
          { name: Notion, url: "NotionBadge" },

        ],
      demo: "https://www.facebook.com/",
      github: "https://github.com/shubham123456789/react-portfolio",
    },
    {
      id: 2,
      image: Project2,
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        badge: 
        [
          { name: React, url: "ReactBadge" },
          { name: Node, url: "NodeBadge" }
        ],
      category: "React",
      demo: "https://www.ikea.com/hu/hu/?ref=gwp-start",
      github: "https://github.com/shubham123456789/react-portfolio",
  
    },
    {
      id: 3,
      image: Project3,
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      badge:[
          { name: React, url: "ReactBadge" }
        ],
      category: "React Native",
      demo: "http://reactjs.",
      github: "https://github.com/shubham123456789/react-portfolio",
    },
    {
      id: 4,
      image: Project4,
      title: "Project 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      badge:[
          { name: React, url: "ReactBadge" },
          { name: Node, url: "NodeBadge" }
        ],
      category: "Flutter",
      demo: "http://reactjs.",
      github: "https://github.com/shubham123456789/react-portfolio",
    },
    {
      id: 5,
      image: Project5,
      title: "Project 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      badge:[
          { name: React, url: "ReactBadge" },
          { name: Node, url: "NodeBadge" }
        ],
        category: "Game",
      demo: "http://reactjs.",
      github: "https://github.com/shubham123456789/react-portfolio",
    },
    {
      id: 6,
      image: Project6,
      title: "Project 6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      badge:[
          { name: React, url: "ReactBadge" },
          { name: Node, url: "NodeBadge" }
        ],
      category: "Game",
      demo: "http://reactjs.",
      github: "https://github.com/shubham123456789/react-portfolio",
    },
  ];
  
  export const projectsNav = [
    {
      name: "All",
    },
    {
      name: "React",
    },
    {
      name: "Game",
    },
  
    {
      name: "React Native",
    },
    {
      name: "Flutter",
    },
  ];

//About Text 

//Contant 
export const Contact =

[
    {
      sectiontitle:"Let's Connect",
      sectionsubtitle:"Contact Me",
      //
      contacttitle:"Talk to me",
      Button:"Send Message"
    }
]



//Project IMG import 
import Project1 from "../../assets/project1.jpg";
import Project2 from "../../assets/project2.jpg";
import Project3 from "../../assets/project3.jpg";
import Project4 from "../../assets/project4.jpg";
import Project5 from "../../assets/project5.jpg";
import Project6 from "../../assets/project6.jpg";
//Project Skills ICONS import 
import AndroidStudio from "../../assets/skills/AndroidStudio-Light.svg";
import Arduino from "../../assets/skills/Arduino.svg";
import AWS from "../../assets/skills/AWS-Light.svg";
import Azure from "../../assets/skills/Azure-Light.svg";
import css from "../../assets/skills/CSS.svg";
import Dart from "../../assets/skills/Dart-Light.svg";
import Git from "../../assets/skills/Git.svg";
import HTML from "../../assets/skills/HTML.svg";
import Htmx from "../../assets/skills/Htmx-Light.svg";
import Illustrator from "../../assets/skills/Illustrator.svg";
import Java from "../../assets/skills/Java-Light.svg";
import JavaScript from "../../assets/skills/JavaScript.svg";
import JQuery from "../../assets/skills/JQuery.svg";
import Kubernetes from "../../assets/skills/Kubernetes.svg";
import Laravel from "../../assets/skills/Laravel-Light.svg";
import Less from "../../assets/skills/Less-Light.svg";
import MongoDB from "../../assets/skills/MongoDB.svg";
import MySQL from "../../assets/skills/MySQL-Light.svg";
import Netlify from "../../assets/skills/Netlify-Light.svg";
import Nginx from "../../assets/skills/Nginx.svg";
import Node from "../../assets/skills/NodeJS-Light.svg";
import Notion from "../../assets/skills/Notion-Light.svg";
import Npm from "../../assets/skills/Npm-Light.svg";
import React from "../../assets/skills/React-Light.svg";
import Sass from "../../assets/skills/Sass.svg";
import Svelte from "../../assets/skills/Svelte.svg";
import Swift from "../../assets/skills/Swift.svg";
import TailwindCSS from "../../assets/skills/TailwindCSS-Light.svg";
import VueJS from "../../assets/skills/VueJS-Light.svg";
import WebAssembly from "../../assets/skills/WebAssembly.svg";
import XD from "../../assets/skills/XD.svg";
import Yarn from "../../assets/skills/Yarn-Light.svg";










