import styles from "../page.module.css";

const Functions = () => {
    
    const sayName= (name: string): string => {
        return `Hello, ${name}!`;
    }

    return (
        <div>
            <h1>Functions</h1>
            <p>With functions we should annotate any parameters and return types.</p>
            <p className={styles.codeBlock}> 
                In Js:
                <br />
                const sayHello = name = &gt; &#123;
                <br />
                return "\Hello &#x24;&#123;name&#125;;
                <br />
                &#125;
                <br/>
                <br/>
                <br/>
                 In Ts:
                <br />
                const sayHello = (name: string): string =&gt; &#123;
                <br />
                return "\Hello &#x24;&#123;name&#125;;
                <br />
                &#125;
                <br/>
            </p> 
            <p> If a function doesn't return anything, the return type is void</p>   
        </div>
    );
};
export default Functions;