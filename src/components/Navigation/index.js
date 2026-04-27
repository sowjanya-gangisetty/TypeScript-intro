import Link from "next/link";
import styles from "./navigation.module.css";



const Navigation = () => {

    const navItems = ["Home", "Arrays", "Primitives", "Objects", "Functions", "Props", "Fetch"];

  return (
    <nav className={styles.nav}>
        {navItems.map((item, index) => (
            <Link key={index} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className={styles.navItems}>
              {item}
            </Link>
          ))}
    </nav>
  );
};

export default Navigation;