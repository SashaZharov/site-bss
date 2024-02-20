"use client";
import styles from "./header.module.css";
import Image from "next/image";
import menu from "../../public/assets/img/Menu.svg";
import logo from "../../public/assets/img/Logo.svg";
import { useState } from "react";
import classNames from "classnames";

const Header = () => {
  const tabs = ["Важное", "Прайс лист", "Контакты"];
  const [activeLink, setActiveLink] = useState("Важное");
  const [toggle, setToggle] = useState(false);

  const handleToggleClick = () => {
    setToggle(!toggle);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setToggle(false);
  };

  return (
    <header className={styles.App__headerRoot}>
      <div className={styles.App__header}>
        <div className={styles.App__headerIcon}>
          <Image className={styles.App__svgImage} src={logo} alt="" />
        </div>

        <nav
          className={classNames(styles.App__headerNav, {
            [styles.toggle__active]: toggle === true,
          })}
        >
          {tabs.map((link) => {
            const isActive = activeLink === link;

            return (
              <a
                key={link}
                className={classNames(styles.App__headerLink, {
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
          className={styles.App__headerToggle}
          onClick={() => handleToggleClick()}
        >
          <Image src={menu} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
