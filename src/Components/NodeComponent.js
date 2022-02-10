import { useState } from 'react';

import { useDispatch } from 'react-redux'

import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';


// custome node component for first node:
const NodeComponent = ({ name }) => {

  const dispatch = useDispatch() 

  const [showIcon, setShowIcon] = useState(false) // state to show edit icon on hover
  const [editing, setEditing] = useState(false) // state enabled when editing the label name 
  const [newName, setNewName] = useState("") // state to store the new name of the label

  // Methods to toggle different states based on user interactions:
  const handleMouseEnter = () => { setShowIcon(true) }

  const handleMouseLeave = () => { setShowIcon(false) }

  const handleEditIconClick = () => { setEditing(true); setShowIcon(true) }

  const handleNewNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleDoneIconClick = () => {
    setEditing(false)
    setShowIcon(false)
    dispatch({ type: "SET_NEW_NODE_NAME", data: newName }) // action dispatcher for changing the label of the first node
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={editing ? () => { } : handleMouseLeave}
      style={{ display: "flex", width: "100%", justifyContent: "space-between" }}
    >
      { // if editing the name, show input field or show the label name
        editing ?
          <input onChange={handleNewNameChange} type="text" placeholder="New Name"
            style={{ width: "80%", padding: "5px", fontSize: "12px" }}
          />
          :
          <div style={{ width: "80%", padding: "5px", fontSize: "12px" }}>{name}</div>
      }

      { // show edit or done icons based on the user interactions 
        showIcon ?
          (
            editing ?
              <DoneIcon onClick={handleDoneIconClick} fontSize="small" style={{ alignSelf: "center" }} />
              :
              <EditIcon onClick={handleEditIconClick} fontSize="small" style={{ alignSelf: "center" }} />
          )
          : null
      }
    </div>
  )
}

export default NodeComponent