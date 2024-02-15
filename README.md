# React_Pers-Journ

![alt project](https://github.com/Graznov/React_Pers-Journ/blob/master/journal.png?raw=true)
### 6.02.2024 
Vid 15. jsx

### 7.02.2024
16. react fragment
```
function App() {

  return (
    <div>
        <h1>Заголовок</h1>
        <p>какойто текст</p>
    </div>
  )
}
```
чтобы убрать ненужный родительский div, пишем так:
```
function App() {

  return (
    <>
        <h1>Заголовок</h1>
        <p>какойто текст</p>
    </>
  )
}
```
18. создание компонента <u>**Button**</u>
19. Стилизация компонента
20. <u>**JournalItem**</u> создание и верстка,
    динамические данные
21. использовангие <u>**props**</u>
22. Упражнение - Вывод даты
23. Композиция
    ```
    <CardButton>
            <JournalItem
                title={data[0].title}
                text={data[0].text}
                date={data[0].date}
            />
    </CardButton>
    ```
### 8.02.2024
24. Обработка событий
    ```
    function Button() {

        const clicked = () => {
            console.log('btn')
        }

        return (
            <button onClick={clicked} className={'button accent'}>Сохранить</button>
        )
    }
    ```
26-useState

       ```   
       function Button() {

          const [text, setText] =  useState('Сохранить')
          const clicked = () => {
              setText((text==='Сохранить') ? 'Закрыть' : 'Сохранить')
              console.log(text)
          }
    
          return (
              <button onClick={clicked} className={'button accent'}>{text}</button>
          )
       }
       ```
28-Верстка layout

29-логотип

30 - работа с input

    ```        
        <Body>
            <input type="text" onChange={(e) => {
                console.log(e.target.value)
            }}/>
        </Body>
    ```

31 - контролируемый компонент (input)

    ```
        const [inputData, setInputData] = useState('')
        const inputChange = (e) => {
            setInputData(e.target.value)
            console.log(inputData)
        }
    ```
_
    
    ```
        <Body>
            <input type="text" value={inputData} onChange={inputChange}/>
        </Body>
    ```

32 - Отправка формы

    ```
        const addJournalItem = (e) => {
            e.preventDefault()
            const formData = new FormData(e.target)
            const formProps = Object.fromEntries(formData)
    
            console.log(formProps)
        }

        return(
                <form className='journal-form' onSubmit={addJournalItem}>
                    <input type="text" name='title' />
                    <input type="date" name='date'/>
                    <input type="text" name='tag' value={inputData} onChange={inputChange}/>
                    <textarea name='post' id='' cols='30' rows='10'></textarea>
                    <Button text='Сохранить'/>
                </form>
    
        )
    ```

log:

```
{title: '1111', date: '2024-02-10', tag: '222222 222 2222222', post: '333333 33333333 333333 33333333 333333 3333333333333 333\n'}
JournalForm.jsx:17 
```

34-особенности useState.

35-Работа со списком данных (Отображение данных)
```angular2html
{ data.map(el => (
    <CardButton>
        <JournalItem
            title={el.title}
            text={el.text}
            date={el.date}
        />
    </CardButton>
)) }

```
36-Упражнение - Добавление элементов
в родительском:
    функция обрабатывающая приходящие данные:
```angular2html
    const addItem = (item) => {
        setItems(oldItems => [...oldItems, {
            text : item.text,
            title : item.title,
            date : new Date(item.date)
        }])
    }
```

передача функции в дочерний элемент:

```angular2html
    <Body>
        <JournalForm onSubmit={addItem}/> 
    
    </Body>
```

передача данных из дочернего элементв:
```angular2html
function JournalForm({ onSubmit }){

    const addJournalItem = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        console.log(formProps)

        onSubmit(formProps)
    }
```

37- Key в списках

38- Отображение по условию

39- Обзор работы React Dev Tools

    фикс бага со счетчиком id/key

40- Отладка приложения debug

41- Изменение стилей (Стилизация)

42- Динамические классы

43- CSS модули
```angular2html
import styles from './Header.module.css'
    //слово module в нвзвании файла рбязательно
    //styles - необязательное название, можно как угодно...
function Header(){
    return(
            <div className={styles.logo}>
                {/*...но если назвали styles то его и исползуем*/}
            Personal Journal
        </div>
    )
}

<form className={styles['journal-form']} onSubmit={addJournalItem}>
    <input type="text" name='title' className={`${styles['input']} ${formValidState.title ? '' : styles['invalid']}`}/>
    {/*если внутри js выражений или название класса двойное то используем  [ квадратные скобки ]*/}
```

44- classnames

в терминале:
```angular2html
npm install classnames
```
импортируем функцию:
```angular2html
import cn from 'classnames'
```

```angular2html
const inputClass = (cn(styles['input'], {
        [styles['invalid']] : !formValidState.title
    })

<input type="text" name='title' className={inputClass}/>
```

45-стилизация формы

47-useEffect