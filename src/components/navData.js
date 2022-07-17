import React from "react";
import { FaFacebook, FaTwitter, FaHome, FaUserFriends } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/about",
    text: "about",
  },
  {
    id: 2,
    url: "/projects",
    text: "projects",
  },
  {
    id: 3,
    url: "/contact",
    text: "contact",
  },
];

export const social = [
  {
    id: 1,
    url: "https://github.com/Osezei",
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/john-ikhimioya-652b071a7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoQ8oXJKrRvG8ZloZME0G1A%3D%3D",
    icon: <BsLinkedin />,
  },
  {
    id: 3,
    url: "https://www.twitter.com/osezei",
    icon: <FaTwitter />,
  },
];
