'use client'
import { useState } from "react"
import styles from './tabs.module.css'
import TabItem from '@/components/TabItem'
import { title } from "process"

//type ContentType =  "State"|"Generics"| "Functions"
//const tabContent:ContentType[] = ["State", "Generics", "Functions"]
const tabContent:string[] = ["State", "Generics", "Functions"]

const Tabs = () => {
    //const [content, setContent] = useState<ContentType | null >(null)
    const [content, setContent] = useState<string | null >(null)

    return(
        <div>
            <div className={styles.tabs}>
                 {tabContent.map((item, index)=> 
                        <TabItem  key={index} title= {item} updateFunction={setContent}/>
                 )}           
            </div>
            {content === "State" && <div className="codeBlock">Here is the State Content!!</div>}
            {content === "Generics" && <div className="codeBlock">Generics, i hate Generics!!</div>}
            {content === "Functions" && <div className="codeBlock">Functions are set of instructions!!</div>}
        </div>
    )
}

export default Tabs