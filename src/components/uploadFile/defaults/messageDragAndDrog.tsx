import React from 'react'
import UploadImage from '../../../assets/images/upload_files.svg'

function MessageDragAndDrog({dragging}: {dragging:boolean}) {
  return (
    <div className={"drag_and_drog_zone " + (dragging ? 'dragging':'')}>
      <img src={UploadImage} alt="upload_file_image"/>
      <p className="description">Drag & Drop your image here</p>
    </div>
  )
}

export default MessageDragAndDrog
