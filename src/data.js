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
    path: "/bites",
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
    status: "Coming Soon",
    slug: "web-development",
  },
  {
    id: 2,
    name: "Web Development",
    meta: "Learn how to use the BASICS model..",
    status: "Coming Soon",
  },
  {
    id: 3,
    name: "Web Development",
    meta: "Learn how to use the BASICS model..",
    status: "Coming Soon",
  },
  {
    id: 4,
    name: "Web Development For Beginners",
    meta: "Learn how to use the BASICS model..",
    status: "Available",
  },
  {
    id: 5,
    name: "Web Development",
    meta: "Learn how to use the BASICS model..",
      status: "Coming Soon",
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
    slug: "what-are-my-transferrable-skills",
  },
  {
    id: 2,
    title: "Let’s talk about Imposter Syndrome",
    createdAT: "6 July 2022, 4pm sgt",
    slug: "let-s-talk-about-imposter-syndrome",
  },
  {
    id: 3,
    title: "What are my Transferrable Skills?",
    createdAT: "6 July 2022, 4pm sgt",
    slug: "what-are-my-transferrable-skills",
  },
  {
    id: 4,
    title: "What are my Transferrable Skills?",
    createdAT: "6 July 2022, 4pm sgt",
    slug: "what-are-my-transferrable-skills",
  },
  {
    id: 5,
    title: "What are my Transferrable Skills?",
    createdAT: "6 July 2022, 4pm sgt",
    slug: "what-are-my-transferrable-skills",
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

export const faqArr = [
  {
    question: 'How much will I have to pay for the class?',
    answer: 'Courses are all free to access until 30 August 2022. Look out for our affordable pricing that is coming soon!'
  },
  {
    question: 'Can I take more than one class at a time?',
    answer: 'It really depends on your pace based on your work and personal life schedule. We recommend not to rush through the courses but to maintain regular pace along with Bite-sized reads and Live sessions.'
  },
  {
    question: 'Do I have to be online at an exact time to study?',
    answer: 'Absolutely not. I&I’s development courses are designed for busy professionals all around the world. You can learn at your own pace comfortably on mobile or on your laptop.'
  },
  {
    question: 'How are classes graded?',
    answer: 'Unlike most courses, we don’t pass or fail you for any courses. There are rarely only ONE WAY to get to where you want to be. We encourage and guide you through prompts to allow you to reflect and consider other options.'
  },
  {
    question: 'How long does it take to complete a class?',
    answer: 'There will be a Q&A session at the end of the session. But of course, you may always key in your questions in the Q&A chat during the session and the speaker and/or facilitator will do their best to answer as many as possible!'
  },
  {
    question: 'Can I ask questions during the live sessions?',
    answer: 'It really depends on your pace based on your work and personal life schedule. We recommend not to rush through the courses but to maintain regular pace along with Bite-sized reads and Live sessions.'
  },
  {
    question: 'What do I need to prepare beforehand?',
    answer: 'Come with a clear and open mind is all you need! Okay, maybe a pen and a piece of paper if you insist.'
  },
  {
    question: 'Will there be a recording of the sessions?',
    answer: 'Majority of the sessions will be recorded and sent to your registered email address. So don’t worry if you have registered but can’t make it last minute, we know how busy professionals can be!'
  },
]
