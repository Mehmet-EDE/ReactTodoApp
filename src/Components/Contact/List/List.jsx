import { useState } from 'react'

function List({ contacts }) {
    const [filtered, setFilter] = useState('')
    const search = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(filtered.toLocaleLowerCase()))
    })
    console.log(search)
    return (
        <div>
            <input className="Inputs" placeholder='Set Filter' value={filtered} onChange={(e) => setFilter(e.target.value)} />
            <br />
            <ul className="List">
                {
                    search.map((contact, index) =>
                        <li key={index}>
                            <span>Name : {contact.name}</span>
                            <span>Phone : {contact.phone}</span>
                        </li>
                    )
                }
            </ul>
            <p>Total Contact {search.length}</p>
        </div>
    )
}

export default List
