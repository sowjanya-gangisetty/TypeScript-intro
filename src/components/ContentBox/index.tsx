type ContextBoxProps = {
    title: string,
    description: string
}

const ContentBox = ({title, description}:ContextBoxProps) => {
    return(
        <div>
            <h3>
               {title} 
            </h3>
            <div className="codeBlock">
                    {description}
            </div>
        </div>
    )
}
export default ContentBox