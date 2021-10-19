import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './search.scss'

type SearchCityProps = {
    onLocationChange: (search: string) => void
}
export default function SearchCity({onLocationChange}: SearchCityProps) {
    const [search, setSearch] = useState('');

    function handlerSearchChange(e: any) {
        const {value} = e.target
        setSearch(value)
        onLocationChange(value)
    }

    function submitForm(e: any) {
        e.preventDefault()
        onLocationChange(search)
    }
    return (
        <>
            <form onSubmit={submitForm}>
                <input type="text" value={search} className="textbox" placeholder="Search" onChange={handlerSearchChange} />
                <button type="submit"><FontAwesomeIcon icon={faSearch} /> </button>
            </form>
        </>
    )
}
