import React from "react";
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";
import * as GrIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About Me",
    path: "/aboutus",
    icon: <SiIcons.SiAboutdotme />,
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/contactus",
    icon: <MdIcons.MdContactMail />,
    cName: "nav-text",
  },
  {
    title: "Resume",
    path: "/resume",
    icon: <GrIcons.HiDocumentText />,
    cName: "nav-text",
  },
  {
    title: "Testimonial",
    path: "/messages",
    icon: <BiIcons.BiCommentCheck />,
    cName: "nav-text",
  },
];
