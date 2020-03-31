import React, {useState} from 'react';
import Image from './Image'

const Row = props => {

  //get the array index of the active image
  const getIndex = imageId => {
      const item = props.list.list.filter(item => item.id == imageId)
      const index = props.list.list.findIndex(element => element.id == item[0].id)
      return index
  }

  //get the removed image
  const imageClicked = id => {
    const index = getIndex(id)
    const item = props.list.list[index]
    //props.setList(props.list.filter(el => el !== item))
    props.setList(index)

    //return item
    //props.moveImage(item)
  }

  return (
    <ul className="image-list">
      {
        props.list.list.map(item => <li key={item.id.toString()}> < Image item={item} imageClicked={imageClicked}/> </li>)
      }
    </ul>
  )
}
export default Row
