
const Objects = () => {

     interface Sport {
        name: string;
        players: number;
        equipment: string;
    }
    let Pingpong: Sport = {
        name: "pingis",
        players: 2,
        equipment: "paddle",
        rules: null
    }
    let Cricket: Sport = {
        name: "crickets",
        players: 11,
        equipment: "bat and ball",
        rules: null
    }

    interface Sport {
        rules:string[] | null
    }

    type useName = string;
    type className = string

    type student = {
        name: useName,
        age: number,
        class: className,
        printName: () => string,
    }
    const John: student = {
        name: "John",
        age: 20,
        class : "FED",
        printName: () => "John"
    }

 type classRep = student & {
        phone: number;
    }
    const Jane: classRep = {
        name: "Jane",
        age: 22,
        class:"FED",
        phone: 1234567890,
        printName: () => "John"
    }
    const Bob: classRep = {...John, phone: 987654321}

    return (
        <div>
            <h1>Objects</h1>
            <p>This is the Objects page.</p>
        </div>
    );
};
export default Objects;