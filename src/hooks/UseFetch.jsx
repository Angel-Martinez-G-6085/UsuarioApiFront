import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchRequest = async () => {
            try {
                let response = await fetch(url);
                let data = await response.json();
                setData(data)
            } catch {
                setError('Failed to load')
            }
        }
        fetchRequest()
    }, [url])
    return {
        data,
        error
    }
}
