import React, {useEffect, useRef, useState} from 'react'
import PropTypes, { InferProps } from 'prop-types'

/** Custom hooks */ 
import { UseUploading } from '../useUploading'

/** Components */ 
import Uploading from './uploading'
import DragAndDrogContent from './dragAndDrogContent'
import UploadSuccess from './uploadSuccess'


function DragZone({ children }: InferProps<typeof DragZone.propTypes>) {

  const useUploading = UseUploading()

  const {state, dropRef}: {state:any, dropRef:any} = useUploading
  const {isUploading, dragging, isInvalidFile}: {image:string, dragging:boolean, isUploading:boolean, isInvalidFile: boolean} = state

  return (
    <div ref={dropRef} className="drag_and_drog">
       <UploadSuccess/> 
      {/*
        isUploading ? 
          <Uploading/> : 
          <DragAndDrogContent dragging={dragging} isInvalidFile={isInvalidFile} />
      */}
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
