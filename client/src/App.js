import React, { useEffect, useState } from "react"

import axios from "axios"

import ItemList from "./components/ItemList"

import AddItem from "./components/AddItem"

import EditItem from "./components/EditItem"

function App() {

  const [items, setItems] = useState([])

  const [editingItem, setEditingItem] = useState(null)

  useEffect(() => { fetchItems() }, [])

  const fetchItems = () => {

    axios.get("item").then((response) => {

      setItems(response.data)
      console.log(response.data);

    })
  }

  const handleAddItem = () => { fetchItems() }

  const handleEditItem = (id) => {

    const itemToEdit = items.find((item) => item._id === id)

    setEditingItem(itemToEdit)

  }

  const handleUpdateItem = () => {

    fetchItems()

    setEditingItem(null)

  }

  const handleDeleteItem = () => {

    fetchItems()

  }

  return (

    <div className="h-[100vh] mx-auto p-4">

      <div className="flex justify-center items-center">

        <h1 className="text-3xl font-bold mb-4 ">TASK MANAGER</h1>

      </div>

      <div className="sm:grid grid-cols-12 gap-5 h-full">

        <div className="col-span-4 px-3 py-3 sm:py-0 mb-5 border-b-[0.01rem] sm:border-r-[0.01rem] border-gray-400">
          <AddItem onAddItem={handleAddItem} />
          {editingItem && ( <EditItem item={editingItem} onUpdateItem={handleUpdateItem} /> )}

        </div>
        <div className="col-span-8">
    {
      items && 
      
          <ItemList items={items} onEditItem={handleEditItem} onDeleteItem={handleDeleteItem} />
    }

        </div>


      </div>

    </div>

  )
  
}

export default App
