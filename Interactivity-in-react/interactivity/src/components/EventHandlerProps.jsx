import Button from "./Button";

function PlayButton({movie,children}){
    function handleClick(){
        alert('Playing'+movie)
    }

    return(
        <Button onClick={handleClick}>
            play
        </Button>
    )
}

export default PlayButton;