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

  const handleImgClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveLink("Важное");
  };

  const handleToggleClick = () => {
    setToggle(!toggle);
  };

  const handleLinkClick = (link: string) => {
    setToggle(false);
    const section = document.getElementById(link);
    if (section) {
      const scrollPosition = section.offsetTop - 50;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
      setActiveLink(link);
    }
  };

  return (
    <header className={styles.App__headerRoot} id="header">
      <div className={styles.App__header}>
        <div className={styles.Header__icon} onClick={() => handleImgClick()}>
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
