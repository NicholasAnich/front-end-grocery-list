import React from 'react'
import groceriesData from '../data/groceriesData.js'

const GroceryList = (props) => (
  // <li>
    <App
    {props.list.map((element, index) =>
      <div>
        {element.name}
      </div>
    )}
    />
  // </li>

)

export default GroceryList