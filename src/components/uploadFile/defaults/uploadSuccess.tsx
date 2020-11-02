import React, {useRef} from 'react'

function UploadSuccess() {

  const textRef = useRef(null)

  const copyButton = (e: any) => {
    var textCopy: any = textRef.current
    const range = document.createRange();
    range.selectNode(textCopy);
    const selection:any = window.getSelection()
    selection.addRange(range);
    try {
      // Now that we've selected the anchor text, execute the copy command
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copy email command was ' + msg);
    } catch(err) {
      console.log('Oops, unable to copy');
    }
    e.target.focus();
  }

  return (
    <div className="upload-success" >
      <h4 className="title">Uploaded Successfully!</h4>
      <div className="container-link-img">
        <div className="url-content">
          <p ref={textRef} className="url">1234567123asdfasdfasdfasdfasdfasdf234242342342423423424234242j</p>
        </div>
        <button onClick={ (e) => copyButton(e)} className="btn-primary button-choose-file">Copy link</button>
      </div>
    </div>
  )
}

export default UploadSuccess
