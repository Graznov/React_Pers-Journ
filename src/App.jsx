import './App.css'
import Button from "./сomponents/Button/Button.jsx";
import JournalItem from "./сomponents/JournalItem/JournalItem.jsx";

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
    <>
        <h1>Заголовок</h1>
        <p>какойто текст</p>
        <Button/>
        <JournalItem
            title={data[0].title}
            text={data[0].text}
            date={data[0].date}
        />
        <JournalItem
            title={data[1].title}
            text={data[1].text}
            date={data[1].date}
        />
    </>
  )
}

export default App
