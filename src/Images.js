import React, {useReducer, useState} from 'react';
import Row from './Row'

const Images = props => {

  //moving data into 2 categories
  let list = {
    list : props.images.filter(row => row.id % 2)
  }
  let anotherList = {
    list : props.images.filter(row => !(row.id % 2))
  }

  function reducer(state, index) {
    const newArray = state.list;
    delete newArray[index];
    return { list: newArray };
  }

  

  const [list1, setList1] = useReducer(reducer, list)
  const [list2, setList2] = useReducer(reducer, anotherList)

  const moveImage = (item) => {
    // console.log(item)
  }

  return (
    <div className="images-container">
      < Row list={list1} moveImage={moveImage} setList={setList1} />
      < Row list={list2} moveImage={moveImage} setList={setList2} />
    </div>
  )
}

export default Images
