import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './search.scss'

type SearchCityProps = {
    onLocationChange: (search: string) => void
}
export default function SearchCity({onLocationChange}: SearchCityProps) {
    const [search, setSearch] = useState('');
    const [keyCode, setKeyCode] = useState(0);

    // Handler search change
    function handlerSearchChange(e: any) {
        const {value} = e.target
        setSearch(value)
        if (keyCode !== 8) { // delete key code
            onLocationChange(value)
        }
    }

    function submitForm(e: any) {
        e.preventDefault()
        if (keyCode !== 8) { // delete key code
            onLocationChange(search)
        }
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <input type="text" value={search} className="textbox" placeholder="Search" onKeyDown={(e) => setKeyCode(e.keyCode)}  onChange={handlerSearchChange} />
                <button type="submit"><FontAwesomeIcon icon={faSearch} /> </button>
            </form>
        </>
    )
}
