import './App.css'
import LeftPanel from "./layouts/LeftPanel/LeftPanel.jsx";
import Body from "./layouts/Body/Body.jsx";
import Header from "./сomponents/Header/Header.jsx";
import JournalList from "./сomponents/JournalList/JournalList.jsx";
import JournalAddButton from "./сomponents/JournalAddButton/JournalAddButton.jsx";
import JournalForm from "./сomponents/JournalForm/JournalForm.jsx";
import {useLocalStorage} from "./hooks/use-localstorage.hook.js";
import {UserContextProvider} from "./context/user.context.jsx";

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

    // console.log(items)

    const addItem = (item) => {
        // console.log(item)
        setItems([...mapItems(items), {
            ...item,
            date : new Date(item.date),
            id : items.length>0 ? Math.max(...items.map(i => i.id))+1 : 1
        }])
      }

  return (
      <UserContextProvider>
          <div className={'app'}>

              <LeftPanel>
                  <Header/>
                  <JournalAddButton/>
                  <JournalList items={mapItems(items)}/>
              </LeftPanel>
              <Body>
                  <JournalForm onSubmit={addItem}/> {/*через onSubmit={addItem} из JournalForm вытягиваются данные*/}

              </Body>

          </div>
      </UserContextProvider>

  )
}

export default App
