//import styles from "./page.module.css";

const Primitives = () => {

    const userId: string | number =123
    const anotherUserId: string | number = "abc123"

    const myFunction = (userId: string | number): string => {
        console.log(`User ID is: ${userId}`)
        
        if (typeof userId === "string") {
            return "its a string"
        }
        return "its a number"
    }
    
    return (
        <>
            <h1>Primitives</h1>
            <p>A Union allows developer to tell a variable it can be more than one type</p>
            <p className={"codeBlock"}>
                const userId: string | number = 123; <br />
                const anotherUserId: string | number = "abc123";
            </p>
        </>
    );
};
export default Primitives;