import { FaBars } from "react-icons/fa";
import Whatsapp from './assets/whatsapp.png'
import Mail from './assets/mail.png'
import Linked from './assets/linked.png'
import Insta from './assets/insta.png'

export const navLinks = [
    {
      id: 1,
      name: "Home",
      path: "/",
      className: 'flex md:hidden '
    },
    {
      id: 2,
      name: "Development Courses",
      path: "/courses",
    },
    {
      id: 3,
      name: "Bite-sized Reads",
      path: "/blog",
    },
    {
      id: 4,
      name: "Live Sessions",
      path: "/sessions",
    },
    {
      id: 5,
      name: "1 to 1 Support",
      path: "/support",
    },
    {
      id: 6,
      name: "About Us",
      path: "/about-us",
    },
  ];


  export const socials = [
    {
      path: "https://www.linkedin.com/",
      icon: Linked,
    },
    {
      path: "https://www.instagram.com/",
      icon: Insta,
    },
    {
      path: "https://www.linkedin.com",
      icon: Whatsapp,

    },
    {
      path: "mailto:",
      icon: Mail,
    },
  
    
  ]