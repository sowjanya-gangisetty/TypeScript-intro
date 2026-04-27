import Image from "next/image";
import styles from "./page.module.css";

const myName: string = "Sowji"

export default function Home() {

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Let's explore TypeScript!</h1>
      <p className={styles.description}>Every piece of data in TypeScript has a specified data type. </p>
      <p>To do this we use a concept called "type annotation".</p>
      <div className={styles.codeBlock}>
        <p>Here is some text</p>
        const title:string="Welcomre to TypeScript!"
      </div>
      <p> If we try to change the type of avariable or assign a value of the wrong type, TypeScript will show an error.</p>
    
      <div className={styles.codeBlock}>
        <p>Here is some other text</p>
          let  title:string="Try to change the type!"
          title=42; // This will cause an error because 42 is not a string
      </div>
    </div>
  );
}
