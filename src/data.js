import Whatsapp from "./assets/whatsapp.png";
import Mail from "./assets/mail.png";
import Linked from "./assets/linked.png";
import Insta from "./assets/insta.png";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
    className: "flex md:hidden ",
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
    path: "https://www.linkedin.com/company/innovation-and-integration-ltd-/",
    icon: Linked,
  },
  {
    path: "https://www.instagram.com/iandi.eu/",
    icon: Insta,
  },
  {
    path: "https://www.linkedin.com",
    icon: Whatsapp,
  },
  {
    path: "mailto:info@iandi.eu",
    icon: Mail,
  },
];

export const courseDetails = [
  {
    id: 1,
    name: "Web Development",
    meta: "Learn how to use the BASICS model to assess and take charge of your physical and mental well-being.",
    status: "Coming soon",
    slug: "web-development",
  },
  {
    id: 2,
    name: "Web Development",
    meta: "Learn how to use the BASICS model..",
    status: "Coming soon",
  },
  {
    id: 3,
    name: "Web Development",
    meta: "Learn how to use the BASICS model..",
    status: "Coming soon",
  },
  {
    id: 4,
    name: "Web Development",
    meta: "Learn how to use the BASICS model..",
    status: "Out of Stock!",
  },
  {
    id: 5,
    name: "Web Development",
    meta: "Learn how to use the BASICS model..",
      status: "Coming soon",
  },
  {
    id: 6,
    name: "Web Development",
    meta: "Learn how to use the BASICS model to assess and take charge of your physical and mental well-being.",
    status: "Out of Stock!",
  },
];

export const biteReads = [
  {
    id: 1,
    title: "What type of hiring managers are your best friend?",
    content:
      "Here’s a breakdown of what the readingTime function is doing text  fetch the article text so we can preform the calculationswpm average adult reading speed (words per minute) words  calculate total number of words (length) by splitting at each whitespace time  calculates the read time rounded up to the nearest whole number With the time calculated we then output the number into That concludes this tutorial, you now know how to display the estimated reading time for an article that can easily be dropped into a blog or news website.",
    slug: "how-to-figure-out-what-i-want-in-my-career",
  },
  {
    id: 2,
    title: "How to figure out what I want in my career?",
    slug: "how-to-figure-out-what-i-want-in-my-career",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ex vero praesentium pariatur voluptas eius expedita a nam ut! Optio exercitationem impedit quo reprehenderit ut tenetur itaque quasi numquam doloremque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ex vero praesentium pariatur voluptas eius expedita a nam ut! Optio exercitationem impedit quo reprehenderit ut tenetur itaque quasi numquam doloremque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ex vero praesentium pariatur voluptas eius expedita a nam ut! Optio exercitationem impedit quo reprehenderit ut tenetur itaque quasi numquam doloremque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ex vero praesentium pariatur voluptas eius expedita a nam ut! Optio exercitationem impedit quo reprehenderit ut tenetur itaque quasi numquam doloremque!",
  },
  {
    id: 3,
    title: "How to figure out what I want in my career?",
    duration: "4 mins",
    slug: "how-to-figure-out-what-i-want-in-my-career",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ex vero praesentium pariatur voluptas eius expedita a nam ut! Optio exercitationem impedit quo reprehenderit ut tenetur itaque quasi numquam doloremque!",
  },
  {
    id: 4,
    title: "How to figure out what I want in my career?",
    duration: "4 mins",
    slug: "how-to-figure-out-what-i-want-in-my-career",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ex vero praesentium pariatur voluptas eius expedita a nam ut! Optio exercitationem impedit quo reprehenderit ut tenetur itaque quasi numquam doloremque!",
  },
];

export const Sessions = [
  {
    id: 1,
    title: "What are my Transferrable Skills?",
    createdAT: "6 July 2022, 4pm sgt",
  },
  {
    id: 2,
    title: "Let’s talk about Imposter Syndrome",
    createdAT: "6 July 2022, 4pm sgt",
  },
  {
    id: 3,
    title: "What are my Transferrable Skills?",
    createdAT: "6 July 2022, 4pm sgt",
  },
  {
    id: 4,
    title: "What are my Transferrable Skills?",
    createdAT: "6 July 2022, 4pm sgt",
  },
  {
    id: 5,
    title: "What are my Transferrable Skills?",
    createdAT: "6 July 2022, 4pm sgt",
  },
];
export const Testimonials = [
  {
    id: 1,
    person: "John Doe",
    title: "Story Title",
    desc: "DescriptionDescription"

  },
  {
    id: 2,
    person: "John Doe",
    title: "Story Title",
    desc: "DescriptionDescription"
  },
  {
    id: 3,
    person: "John Doe",
    title: "Story Title",
    desc: "DescriptionDescription"

  },
  {
    id: 4,
    person: "John Doe",
    title: "Story Title",
    desc: "DescriptionDescription"

  },
  {
    id: 5,
    person: "John Doe",
    title: "Story Title",
    desc: "DescriptionDescription"


  },
];

export const waitlist=[
  {
    id: 1,
    email: 'johndoe@gmail.com',
    course: 'Web Development',
  },
  {
    id: 2,
    email: 'johndoe@gmail.com',
    course: 'Web Development',
  },
  {
    id: 3,
    email: 'johndoe@gmail.com',
    course: 'Web Development',
  },
  {
    id: 4,
    email: 'johndoe@gmail.com',
    course: 'Web Development',
  },
]

export const mdRules = [
  {
    title: "From h1 to h6",
    rule: "# Heading -> ######Heading"
  },
  {
    title: "Blockquote",
    rule: "> Your quote"
  },
  {
    title: "Image",
    rule: "![alt text](https://via.placeholder.com/150x150)"
  },
  {
    title: "Link",
    rule: "[Link Text](https://www.google.com)"
  }

]
