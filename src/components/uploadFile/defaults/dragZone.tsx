import React, {useEffect, useRef, useState} from 'react'
import PropTypes, { InferProps } from 'prop-types'

import MessageDragAndDrog from './messageDragAndDrog'

function DragZone({ children }: InferProps<typeof DragZone.propTypes>) {

  const [dragging, setDragging] = useState(false)
  const [dragCounter, setDragCounter] = useState(0)
  const [image, setImage] = useState('')

  const dropRef = useRef(null)
  const handleDrag = (e:any) => {
    console.log('handleDrag')
    //console.log(e)
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDragIn = (e:any) => {
    console.log('handleDragIn')
    console.log(e)
    e.preventDefault()
    e.stopPropagation()
    let counter = dragCounter
    setDragCounter(counter++)
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      console.log('e.dataTransfer.items')
      console.log(e.dataTransfer.files)
      setDragging(true)
    }
  }

  const handleDragOut = (e:any) => {
    console.log('handleDragOut')
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
    <div ref={dropRef} className="drag">
      {dragging &&  <div style={{
              border: 'dashed grey 4px',
              backgroundColor: 'rgba(255,255,255,.8)',
            
            }}>

              <div 
              style={{
                position: 'absolute',
                top: '50%',
                right: 0,
                left: 0,
                textAlign: 'center',
                color: 'grey',
                fontSize: 36
              }}
            >
              <div>drop here :)</div>
              </div>
      </div> }
      { image && <img src={image} alt="imagen a cargar" /> }
      <MessageDragAndDrog/>
    </div>
  )
}

DragZone.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default DragZone
