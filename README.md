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