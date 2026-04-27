import styles from "../page.module.css";

const Arrays = () => {

    const student:[name: string, age: number, grade: string] = ["Alice", 25, "A+"];
    student.shift();
    student.unshift(9);
    console.log(typeof student[0]);

    return (
        <>
            <h1>Arrays</h1>
            <div>
                <p>This is the Arrays page.</p>
                <p>Arrays are usually used to store multiple values in a single variable.</p>
            </div>
            <div >
                <p>Here is some other text</p>
                <p className={styles.codeBlock}> 
                    const myArray: number[] = [1, 2, 3, 4, 5];
                </p>
                <p className={styles.codeBlock}> 
                    const students: string[] = ["Alice", "Bob", "Charlie"];
                </p>
                <p>A tuple is an array of fixed length and mixed data types.</p>
                <p className={styles.codeBlock}> 
                    const myTuple: [string, number] = ["Alice", 25];
                </p>
            </div>
        </>
    );
};
export default Arrays;