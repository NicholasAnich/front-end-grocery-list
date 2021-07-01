import React from 'react'

const GroceryItem = (props) => (
  <li>
    {props.item} {props.quantity}
  </li>

)

export default GroceryItem