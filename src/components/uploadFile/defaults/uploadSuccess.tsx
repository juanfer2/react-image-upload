import React from 'react'

function UploadSuccess() {
  return (
    <div className="upload-success" >
      <h4 className="title">Uploaded Successfully!</h4>
      <div className="container-link-img">
        <span></span>
        <button className="btn-primary button-choose-file">Copy link</button>
      </div>
    </div>
  )
}

export default UploadSuccess
