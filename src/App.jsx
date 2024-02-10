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

function App() {

    const data = [
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



  return (
    <div className={'app'}>

        <LeftPanel>
            <Header/>
            <JournalAddButton/>
            <JournalList>
                <CardButton>
                    <JournalItem
                        title={data[0].title}
                        text={data[0].text}
                        date={data[0].date}
                    />
                </CardButton>

                <CardButton>
                    <JournalItem
                        title={data[1].title}
                        text={data[1].text}
                        date={data[1].date}
                    />
                </CardButton>
            </JournalList>
        </LeftPanel>
        <Body>
            <JournalForm/>
        </Body>

    </div>
  )
}

export default App
