import logo from './logo.svg';
import './App.css';

import { useState } from 'react'
import MyButton from './MyItem/button';

function App() {

  const [txt, settxt] = useState('')
  const [list, setlist] = useState([])
  const [edititem, setedititem] = useState(true)
  const [Newitem, setNewitem] = useState('')
  // function to add itme in list 

  function add() {
    if (!txt) {

    }
    else if (txt && !edititem) {
      setlist(list.map((elem) => {
        if (elem.Token === Newitem) {
          return { ...elem, Name: txt }
        }
        return elem;
      }))
      setedititem(true)
      settxt('')
      setNewitem(null)

    }
    else {
      // list.push(txt)
      const Items = { Token: new Date().getTime().toString(), Name: txt }
      setlist([...list, Items]);
      settxt('')
    }
  }
  //  here is our edit Button / function to edit our list item  

  function edit(ID) {

    let newEditItem = list.find((elem) => {
      return elem.Token === ID
    })
    console.log(newEditItem)
    setedititem(false)
    settxt(newEditItem.Name)
    setNewitem(ID)
  }
  //  in the parameter of Below Function WE get The index number of Our item  
  // Delete Single item 

  function deleteitem(id) {
    alert(" Are you Sure to Delete Item")
    const updateitem = list.filter((e) => {

      return id !== e.Token;

    })
    setlist(updateitem)
  }

  //DeleteAll

  function DeleteAll() {
    alert(" Are you Sure to Delete All Items")
    setlist([]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Muhammad Ali First React To-Do-App</h1>
        <div>
        <input onChange={(e) => {
          settxt(e.target.value)
        }} />
        
        {
          edititem ? <button onClick={() => add()}> Add item</button> : <button onClick={() => add()}> Update item</button>
        }
        
              {/* <button onClick={() => add()}> Add item</button> */}
              <button className='btn-danger' onClick={() => DeleteAll()}>Delete All Item </button>
    
              </div>
    
    
        {/* imported button  */}
        {/* <MyButton btnValue="Add Item" /> */}

        {/* List Jo Screen Par Show Hogi Or item Add hon gy array main  */}
        <ul>{list.map((Inputvalue) => {
          {/* map hm ko uniuq id deta ha method */ }
             return<li key={Inputvalue.Token} >{Inputvalue.Name}
          <div>
            <button className='btn-green' onClick={() => edit(Inputvalue.Token)}>edit Item</button>
            <button className='btn-danger' onClick={() => deleteitem(Inputvalue.Token)}>Delete Item</button>
            </div>
          </li>
          
        })}
        </ul>

      </header>
    </div>
  );
}

export default App;
