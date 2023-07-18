import React from "react";
import pic from "../assets/pic.png";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div id="footer">
        <img src={pic} alt="footer" />
        <h2>Harsh Soni</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://github.com/HarshSoni2002" target={"blank"}>
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-soni-20b775223/"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/har__sh12/" target={"blank"}>
            <AiFillInstagram />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
