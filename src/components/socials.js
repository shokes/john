import React from "react";
import { social } from "./navData";

const Socials = () => {
  return (
    <section>
      <ul className="flex mt-2 text-black">
        {social.map((social) => {
          const { id, url, icon } = social;
          return (
            <li key={id} className="mr-2 hover:opacity-70">
              <a href={url} target="_blank">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Socials;
