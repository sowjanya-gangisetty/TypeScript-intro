import ContentBox from '@/components/ContentBox'
import Tabs from '@/components/Tabs'

const Props = () => {
    return (
        <div>
            <h1>Props</h1>
            <p>This is the Props page.</p>
            <ContentBox title= "How to declare props in Type script"
                        description='First create a type or interface defining the poros'/>
            <ContentBox title="Type Syntax"
                        description={"type componentProps = {name:string, description:string}"}/>
            <Tabs/>
        </div>
    );
};
export default Props;

const myFunction = <T,>(argument:T):T => {
    return argument
}
myFunction<string>("Hello")
myFunction<number>(123)