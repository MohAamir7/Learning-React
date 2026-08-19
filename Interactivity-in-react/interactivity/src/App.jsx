import AlertMsg from "./components/AlertButton";
import Toolbar from "./components/Toolbar";



function App(){
  return(
    <>
    <Toolbar
    onPlayMovie={()=> alert("playing")}
    onUploadImage={()=>alert("Uploading Image")}
    msg='messaging'
    movie='1920'
    />
    {/* <AlertMsg msg='uploading' text='Another Button'/> */}
  </>
  )
}

export default App;