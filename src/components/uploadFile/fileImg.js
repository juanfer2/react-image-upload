import React, {useState, useRef} from 'react'

/* Icons */
import IosClose from 'react-ionicons/lib/IosClose'


function FileImg() {
    const [fileImg, setFileImg] = useState('')
    const inputRef = React.createRef(null);
    const onFileChange = (event) =>{
        if(event.target.files && event.target.files[0]){
            //Variable form fielInptu = event.target.files[0]
            console.log(event.target.files[0]);
            //Image preview
            const reader = new FileReader();
            reader.onload = e => {
                setFileImg(reader.result)
                console.log(reader.result)
            }
            reader.readAsDataURL(event.target.files[0])
          }
    } 
    const _handleClick = (e) =>{
        inputRef.current.click();
    } 
    const clearImg = (e) =>{
        setFileImg('')
    }
    return (
        <div className="col-4 fade-in" >
            <input type="file "
            ref={inputRef}
            onChange={(e) => onFileChange(e)}
            className="d-none"
            />
            <div className="container_file_img">
            <IosClose 
            onClick={(e) => clearImg(e)}
            className="delete_file_img" fontSize="30px" color="red" />
            <img 
                onClick={(e) => _handleClick(e)}
                className="file_img"
                src={fileImg.length == 0 
                ? 
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0XriCgv16z8anTGGVEkPnLSZzOUhfzeh3L94lkCiikD7Soyxa&s' 
                : 
                fileImg 
            } />
            </div>
        </div>
    )
}

export default FileImg
