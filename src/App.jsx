import './App.css'
import Button from "./сomponents/Button/Button.jsx";
import JournalItem from "./сomponents/JournalItem/JournalItem.jsx";
import CardButton from "./сomponents/CardButton/CardButton.jsx";
import LeftPanel from "./layouts/LeftPanel/LeftPanel.jsx";
import Body from "./layouts/Body/Body.jsx";
import Header from "./сomponents/Header/Header.jsx";
import JournalList from "./сomponents/JournalList/JournalList.jsx";
import JournalAddButton from "./сomponents/JournalAddButton/JournalAddButton.jsx";
import {useState} from "react";
import JournalForm from "./сomponents/JournalForm/JournalForm.jsx";

const INITIAL_DATA = [
    {
        title : 'Подготовка к обновлеению курсов',
        text : 'горные походы открывают удивительные природные ландшафт',
        date : new Date()
    },
    {
        title : 'Поход в горы',
        text : 'Думал, что очень много времени',
        date : new Date()
    }
]

function App() {

    const [items, setItems] = useState(INITIAL_DATA)



    const addItem = (item) => {
        setItems(oldItems => [...oldItems, {
            text : item.text,
            title : item.title,
            date : new Date(item.date)
        }])
    }





  return (
    <div className={'app'}>

        <LeftPanel>
            <Header/>
            <JournalAddButton/>
            <JournalList>

                { items.map(el => (
                    <CardButton>
                        <JournalItem
                            title={el.title}
                            text={el.text}
                            date={el.date}
                        />
                    </CardButton>
                )) }

            </JournalList>
        </LeftPanel>
        <Body>
            <JournalForm onSubmit={addItem}/> {/*через onSubmit={addItem} из JournalForm вытягиваются данные*/}

        </Body>

    </div>
  )
}

export default App
