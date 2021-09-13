import {useEffect,useState} from 'react'
import '../Contact/styleContact.css'
import Form from './Form/Form'
import List from './List/List'

function Contact() {
    const [contacts,setContacts]=useState([
        {
        name:'Mehmet',
        phone:'123'
    },
        {
        name:'Ahmet',
        phone:'12334'
    },
        {
        name:'Ali',
        phone:'12351'
    },
        {
        name:'Veli',
        phone:'12361'
    },
        {
        name:'Abdulcabar',
        phone:'12371'
    }
]);
    useEffect(() => {
       return console.log(contacts)
    }, [contacts])
    
    return (
        <div class='container'>
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contact
