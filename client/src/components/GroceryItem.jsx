import React from 'react'

const GroceryItem = (props) => (
  <li>
    {props.item.name} {props.item.quantity}
  </li>

)

export default GroceryItem