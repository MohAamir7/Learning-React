import Button from "./Button";


function UploadImage(){
    return(
        <Button onClick={()=>alert('Uploading')}>
            Uploading
        </Button>
    )
}

export default UploadImage;