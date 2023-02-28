import './App.css';
import data from './list';
import { useState } from 'react';

function App() {
  const [itemsArray, setItemsArray] = useState(data);
  const [newItem, setNewItem] = useState('');

  const handleClick = e =>{
    e.preventDefault();
    setItemsArray((prevArray)=>{
      return [...prevArray , newItem ]
    });
    setNewItem('');
  }

  const handleChange = e =>{
    setNewItem(e.target.value);
  }

  const handleDelete = (e) =>{
     setItemsArray( itemsArray.filter(item=> item !== e.target.innerText))
  }

  return (
    <div className="App">
      <div className='container'>
          <h1>Simple Todo</h1>
          <p className='list-items-count'>{itemsArray.length} items in the list</p>
          <ul>
          {itemsArray.map(list=>{
            return <li onClick={handleDelete}>{list}</li>
          })}
          </ul>
          <form onSubmit={handleClick}>
            <div className='d-flex'>
                  <input onChange={handleChange} value={newItem} type="text" name="new-item" id="newItem" required />
                  <button className='btn-add' type='submit'>Add</button>
            </div>
          </form>
      </div>
    </div>
  );
}

export default App;
