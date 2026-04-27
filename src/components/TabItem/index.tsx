import styles from '@/components/Tabs/tabs.module.css'

type TabItemsProps = {
    title : string,
    updateFunction: (tab: string | null) => void
}

const TabItem = ({title, updateFunction}:TabItemsProps) => {

     const handleClick = (tab:string | null): void => {
        updateFunction(tab)
    }

    return(
        <div onClick={() => handleClick(title)} className={styles.tab}> {title} </div>
    )
}

export default TabItem