import './JournalAddButton.css'
import CardButton from "../CardButton/CardButton.jsx";

function JournalAddButton({clearForm}) {
    return (
        <CardButton className='journal-add' onClick={clearForm}>
            + Новое воспоминание
        </CardButton>
    )
}

export default JournalAddButton
