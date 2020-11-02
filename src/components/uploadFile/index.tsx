import React from 'react'
import PropTypes from 'prop-types'
import DragZone from './defaults/dragZone'

// https://medium.com/@650egor/simple-drag-and-drop-file-upload-in-react-2cb409d88929
// https://blog.logrocket.com/create-a-drag-and-drop-component-with-react-dropzone/
function UploadFile() {
  return (
    <div className="container-drag-and-drog">
      <DragZone/>
    </div>
  )
}

export default UploadFile

