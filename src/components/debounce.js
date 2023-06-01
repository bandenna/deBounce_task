import { useState, useEffect } from "react"
const Debounce = (value, delay) => {
    const [debounceDelay, setDelay] = useState(value)
    useEffect(() => {
        const timer = setTimeout(() => {
            setDelay(value)
        }, delay);
        return () => {
            clearTimeout(timer)
        }
    }, [value, delay]);
    return debounceDelay
}
export default Debounce