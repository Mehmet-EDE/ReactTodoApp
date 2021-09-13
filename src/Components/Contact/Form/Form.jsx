import React, { useEffect, useState } from 'react'

function Form({ addContact, contacts }) {
    const [form, setForm] = useState({
        name: '',
        phone: '',
    })
    useEffect(()=>{
        setForm({ name: '', phone: '' })
    },[contacts])
    const onChange = (e) => {
        var name = e.target.name
        if (name == "name") setForm({ ...form, name: e.target.value })
        else setForm({ ...form, phone: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (form.name == '' && form.phone == '') return false
        else addContact([...contacts, form])
        setForm({ name: '', phone: '' })
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input className="Inputs" name='name' onChange={onChange} value={form.name} placeholder="Name" />
            </div>
            <div>
                <input className="Inputs" name='phone' onChange={onChange} value={form.phone} placeholder="Phone Number" />
            </div>
            <div className='btnContainer'>
                <button className="Addbtn">Add</button>
            </div>
        </form>
    )
}

export default Form
