import './App.css'
import LeftPanel from "./layouts/LeftPanel/LeftPanel.jsx";
import Body from "./layouts/Body/Body.jsx";
import Header from "./сomponents/Header/Header.jsx";
import JournalList from "./сomponents/JournalList/JournalList.jsx";
import JournalAddButton from "./сomponents/JournalAddButton/JournalAddButton.jsx";
import JournalForm from "./сomponents/JournalForm/JournalForm.jsx";
import {useLocalStorage} from "./hooks/use-localstorage.hook.js";
import {UserContextProvider} from "./context/user.context.jsx";
import {useState} from "react";

function mapItems(items){
    if(!items) {
        return []
    }
    return items.map(i=>({
        ...i,
        date : new Date(i.date)
    }))
}

function App() {

    const [items, setItems] = useLocalStorage('data')
    const [selectedItem, setSelectedItem] = useState(null)

    // console.log(items)

    const addItem = (item) => {
        if (!item.id) {
            setItems([...mapItems(items), {
                ...item,
                date : new Date(item.date),
                id : items.length>0 ? Math.max(...items.map(i => i.id))+1 : 1
            }])
        } else {
            setItems([...mapItems(items).map(i=>{
                if(i.id === item.id){
                    return {
                        ...item,
                    }
                }
                return i
            })])
        }
    }

    const deleteItem = (id) => {
        setItems([...items.filter(i => i.id !== id)])
    }

  return (
      <UserContextProvider>
          <div className={'app'}>

              <LeftPanel>
                  <Header/>
                  <JournalAddButton clearForm={() => setSelectedItem(null) }/>
                  <JournalList items={mapItems(items)} setItem={setSelectedItem}/>
              </LeftPanel>
              <Body>
                  <JournalForm onSubmit={addItem} onDelete={deleteItem} data={selectedItem}/> {/*через onSubmit={addItem} из JournalForm вытягиваются данные*/}

              </Body>

          </div>
      </UserContextProvider>

  )
}

export default App
