import styles from './header.module.css';
import {Quantico} from 'next/font/google';

const quantico = Quantico({ 
    subsets: ['latin'] ,
    weight: ['400'],
    variable: '--font-quantico',
});

const Header = () => {
  return (
    <header className={`${styles.header} ${quantico.className}`}>
      <h2 className={styles.title}>TypeScript</h2>
      <h3 className={styles.subtitle}>A more disciplined approach to JavaScript</h3>
    </header>
  );
};

export default Header;