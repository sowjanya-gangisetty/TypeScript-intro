
 type FetchButtonProps = {
        handleClick:() => void
    }

const FetchButton = ({handleClick}:FetchButtonProps) => {

    return (
        <div onClick={() => handleClick()}>
            Throw your pokeball!!
        </div>
    )
}
export default FetchButton