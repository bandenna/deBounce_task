import '../App.css'
import { useState, useEffect } from 'react'
import Displaycard from './card'
import Debounce from './debounce'
const Search = () => {
    const [serachval, setSearch] = useState('')
    const [data, setData] = useState('')
    const debounceTerm = Debounce(serachval, 500)

    useEffect(() => {
        if (debounceTerm) {
            fetchData(debounceTerm)
        } else {
            console.log("something wrong")
        }
    }, [debounceTerm])

    const fetchData = async (searched) => {
        try {
            const response = await fetch(`https://apis.ccbp.in/wiki-search?search=${searched}`)

            const jData = await response.json()
            setData(jData)
        } catch (e) {
            console.error(e.message)
        }
    }
    console.log("xxxxxxx:", data)
    return (
        <div className='container'>
            <h1 className='head'>Debounce Task</h1>

            <input value={serachval} type='text' onChange={(e) => setSearch(e.target.value)} className=' mt-3 searc form-control' placeholder='Enter something ...' />
            <div>
                {data.search_results && data.search_results.map((each) => {
                    return <Displaycard details={each} key={each.id} />
                })}
            </div>
        </div>
    )
}
export default Search