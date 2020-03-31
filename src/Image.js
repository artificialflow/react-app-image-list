import React, {useEffect} from 'react';

const Image = props => {

  useEffect(() => {
    console.log('Image initialized: ', props.item.id);
  })

  return (
    <div className="single-image">
      <img src={props.item.url} onClick={() => props.imageClicked(props.item.id)} />
    </div>
  )
}

export default Image
