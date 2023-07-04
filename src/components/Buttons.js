import React from 'react'

const categoriesArray=["Home","Computer","Music","Movies","Travel","Food","Drinks","Dogs","BMW"];
    

const Buttons = () => {
  return (
    <div  className='Buttons'>
       
      {categoriesArray.map((button,i)=>(
        <div className="button" key={i}>{button}</div>
      ))}
     
    </div>
  )
}

export default Buttons
