import React from 'react';
import groceriesData from '../data/groceriesData.js';
import GroceryList from './GroceryList.jsx';
import GroceryItem from './GroceryItem.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      groceryItems: groceriesData,
      item: '',
      quantity: ''

    };

    this.itemChange = this.itemChange.bind(this);
    this.itemSubmit = this.itemSubmit.bind(this);

  }

  itemChange(e) {
    this.setState({[e.target.name]: e.target.value});

  }

  itemSubmit(e) {
    e.preventDefault();

    var newItem = {
      name: this.state.item,
      quantity: this.state.quantity

    }

    this.setState({
      groceryItems: [...this.state.groceryItems, newItem],
      item: '',
      quantity: ''

    })

  }

  render() {
    return (
    <div>
      <img src="grocery-bags.png" />
      <h1>Grocery List</h1>
      <form onSubmit={this.itemSubmit}>
        <label> Item
          <input
          name="item"
          value={this.state.item}
          onChange={this.itemChange}
          />
        </label>
        <label> Quantity
          <input
          name="quantity"
          value={this.state.quantity}
          onChange={this.itemChange}
          />
        </label>
        <button>Add Grocery</button>
        <div className="groceries">
          <GroceryList
          list={this.state.groceryItems}
          />
        </div>
      </form>
    </div>

  )
  }

};

export default App;

















// *** ORIGINGAL CODE ***

// const App = () => (
//   <div>
//     <img src="grocery-bags.png" />
//     <h1>Grocery List</h1>
//     <form>
//       <label> Item
//         <input name="item" value="" />
//       </label>
//       <label> Quantity
//         <input name="quantity" value="" />
//       </label>
//       <button>Add Grocery</button>
//       <ul className="groceries">
//         <li>
//           <span>apples - </span>
//           <span>4</span>
//         </li>
//         <li>
//           <span>bread - </span>
//           <span>2</span>
//         </li>
//         <li>
//           <span>etc...</span>
//         </li>
//       </ul>
//     </form>
//   </div>
// );

// export default App;