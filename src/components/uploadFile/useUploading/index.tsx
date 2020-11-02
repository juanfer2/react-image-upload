import {useState, useRef, useEffect} from 'react'

export const UseUploading = () => {
   
  const [state, setState] = useState({
    isUploading: false,
    image: '',
    dragCounter: 0,
    dragging: false,
    isInvalidFile: false
  })

  const dropRef = useRef(null)

  const validateFile = (file: File) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
    if (validTypes.indexOf(file.type) === -1) {
        return false;
    }
    return true;
}

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
    let counter = state.dragCounter
    setState({...state, dragCounter: counter})
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      console.log('draggin')
      setState({...state, dragging: true})
    }
  }

  const handleDragOut = (e:any) => {
    //console.log('handleDragOut')
    //console.log(e)
    e.preventDefault()
    e.stopPropagation()
    let counter = state.dragCounter
    setState({...state, dragCounter: counter--, dragging: true})
  }

  const handleDrop = (e:any) => {
    e.preventDefault()
    e.stopPropagation()
    setState({...state, dragging: false})
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      // console.log('e.dataTransfer.files')
      // console.log(e.dataTransfer.files) 
      const isValid = validateFile(e.dataTransfer.files[0])
      setState({...state, isUploading: true, isInvalidFile: false})
      //Image preview
      if (isValid){
        const reader: any = new FileReader();
        reader.onload = (e:any)=> {
          const img = reader.result
         // e.dataTransfer.clearData()
          setState({...state, image: img,  dragCounter: 0})
        }
        reader.readAsDataURL(e.dataTransfer.files[0])
      }else{
        setState({...state, isUploading: false, isInvalidFile: true})
      }
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


  return {state, dropRef}

}
