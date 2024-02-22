"use client";
import styles from "./header.module.css";
import Image from "next/image";
import menu from "../../public/assets/img/Menu.svg";
import logo from "../../public/assets/img/Logo.svg";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

const Header = () => {
  const tabs = ["Важное", "Прайс лист", "Контакты"];
  const [activeLink, setActiveLink] = useState("Важное");
  const [toggle, setToggle] = useState(false);

  // useEffect(() => {
  //   const section = document.getElementById("header");
  //   console.log(section);
  // }, []);

  const handleToggleClick = () => {
    setToggle(!toggle);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setToggle(false);
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.App__headerRoot} id="header">
      <div className={styles.App__header}>
        <div className={styles.Header__icon}>
          <Image className={styles.Header__svgImage} src={logo} alt="" />
        </div>

        <nav
          className={classNames(styles.Header__nav, {
            [styles.toggle__active]: toggle === true,
          })}
        >
          {tabs.map((link) => {
            const isActive = activeLink === link;

            return (
              <a
                key={link}
                className={classNames(styles.Header__link, {
                  [styles.link__active]: isActive,
                })}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </a>
            );
          })}
        </nav>
        <div
          className={styles.Header__toggle}
          onClick={() => handleToggleClick()}
        >
          <Image src={menu} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
