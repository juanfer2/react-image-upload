import React, {useEffect, useRef, useState} from 'react'
import PropTypes, { InferProps } from 'prop-types'

import MessageDragAndDrog from './messageDragAndDrog'
import Uploading from './uploading'


function DragZone({ children }: InferProps<typeof DragZone.propTypes>) {

  const [dragging, setDragging] = useState(false)
  const [dragCounter, setDragCounter] = useState(0)
  const [image, setImage] = useState('')

  const dropRef = useRef(null)
  const handleDrag = (e:any) => {
    //console.log('handleDrag')
    //console.log(e)
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDragIn = (e:any) => {
    //console.log('handleDragIn')
    console.log(e)
    e.preventDefault()
    e.stopPropagation()
    let counter = dragCounter
    setDragCounter(counter++)
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      console.log('draggin')
      setDragging(true)
    }
  }

  const handleDragOut = (e:any) => {
    //console.log('handleDragOut')
    //console.log(e)
    e.preventDefault()
    e.stopPropagation()
    let counter = dragCounter
    setDragCounter(counter--)
    setDragging(false)
  }

  const handleDrop = (e:any) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      console.log('e.dataTransfer.files')
      console.log(e.dataTransfer.files) 

      //Image preview
      const reader: any = new FileReader();
      reader.onload = (e:any)=> {
        setImage(reader.result)
        console.log(reader.result)
      }
      reader.readAsDataURL(e.dataTransfer.files[0])
    }
  }
  const removeEvents = () => {
    let div:any = dropRef.current
    div.removeEventListener('dragenter', handleDragIn)
    div.removeEventListener('dragleave', handleDragOut)
    div.removeEventListener('dragover', handleDrag)
    div.removeEventListener('drop', handleDrop)
  }

  const addEvents = () => {
    let div: any = dropRef.current
    div.addEventListener('dragenter', handleDragIn)
    div.addEventListener('dragleave', handleDragOut)
    div.addEventListener('dragover', handleDrag)
    div.addEventListener('drop', handleDrop)
  }

  useEffect(() => {
    addEvents()
    return () => {
      removeEvents()
    }
  }, [])

  return (
    <div ref={dropRef} className="drag_and_drog">
      <Uploading/>
      { image && <img src={image} alt="imagen a cargar" /> }
      <h4 className="title">Upload your image</h4>
      <p className="sub-title"> File should be Jpeg, Png,... </p>
      <MessageDragAndDrog dragging={dragging} />
      <p className="or">Or</p>
      <button className="btn-primary button-choose-file">Choose a file</button>
    </div>
  )
}

DragZone.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ])
}

export default DragZone
