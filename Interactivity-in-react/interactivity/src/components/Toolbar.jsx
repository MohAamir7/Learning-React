import Button from "./Button";
import AlertMsg from "./AlertButton"
import PlayButton from "./EventHandlerProps";
import UploadImage from "./UploadImage";
function Toolbar({onPlayMovie,onUploadImage,msg,movie}){
    return(
        /*
        note that toolbar div also have a onClick event now if i click any button toolbar onclick is also clicked. it's called event propagation.for stop this beahvior use event.Stoppropagation in button.jsx.
        */
        <div onClick={()=>alert("You clicked at ToolBar")}>
            <Button onClick={onPlayMovie} text="Play Movie"/>
            <Button onClick={onUploadImage} text="image uploading"/>
            <AlertMsg msg={msg} text="Alert Button"/>
            <PlayButton movie={movie} text="Playing movie"/>
            <UploadImage/>
        </div>
    )
}

export default Toolbar;