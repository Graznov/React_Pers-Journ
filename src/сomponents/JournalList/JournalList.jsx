import './JournalList.css'
import CardButton from "../CardButton/CardButton.jsx";
import JournalItem from "../JournalItem/JournalItem.jsx";
import {UserContext} from "../../context/user.context.jsx";
import {useContext} from "react";

function JournalList({items}) {

    const { userId } = useContext(UserContext)

    if (items.length === 0){
        return <p>Записей нет, добавьте первую</p>
    }

    const sortItems = (a ,b) => {
        if(a.date < b.date) {
            return 1
        } else {
            return -1
        }
    }

    return  <>{items
                .filter(el => el.userId === userId)
                .sort(sortItems)
                .map(el => (
                    <CardButton key={el.id}>
                        <JournalItem
                            title={el.title}
                            post={el.post}
                            date={el.date}
                        />
                    </CardButton>
                ))}</>

}

export default JournalList
