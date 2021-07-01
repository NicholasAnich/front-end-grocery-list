import React from 'react'
import GroceryItem from './GroceryItem.jsx'


const GroceryList = (props) => (
  <div>
    {props.list.map((element, index) =>
      <GroceryItem
      item={element.name}
      quantity={element.quantity}
      key={index}
      />
    )}
  </div>

)

export default GroceryList
      // <li>
      //   {element.name} {element.quantity}
      //   key={index}
      // </li>



  // <li>
  //   {props.list.map((element, index) =>
  //     <li>
  //       {element.name} {element.quantity}
  //       key={index}
  //     </li>
  //     )}
  // </li>