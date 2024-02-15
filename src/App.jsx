import './App.css'
import LeftPanel from "./layouts/LeftPanel/LeftPanel.jsx";
import Body from "./layouts/Body/Body.jsx";
import Header from "./сomponents/Header/Header.jsx";
import JournalList from "./сomponents/JournalList/JournalList.jsx";
import JournalAddButton from "./сomponents/JournalAddButton/JournalAddButton.jsx";
import {useEffect, useState} from "react";
import JournalForm from "./сomponents/JournalForm/JournalForm.jsx";


function App() {

    const [items, setItems] = useState([])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data'))
        if(data){
            setItems(data.map(item => ({
                ...item,
                date : new Date(item.date)
            })))
        }
    },[])



    const addItem = (item) => {
        console.log(item)
        setItems(oldItems => [...oldItems, {
            text : item.text,
            title : item.title,
            date : new Date(item.date),
            id : oldItems.length>0 ? Math.max(...oldItems.map(i => i.id))+1 : 1
        }])
      }

  return (
    <div className={'app'}>

        <LeftPanel>
            <Header/>
            <JournalAddButton/>
            <JournalList items={items}/>
        </LeftPanel>
        <Body>
            <JournalForm onSubmit={addItem}/> {/*через onSubmit={addItem} из JournalForm вытягиваются данные*/}

        </Body>

    </div>
  )
}

export default App
