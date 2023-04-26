import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function AboutPage() {
    const [photo, setPhoto] = useState([])
    const {id} = useParams()
    const navi = useNavigate()
    const back = () => navi(-1)

    const fetchh = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res => res.json())
        .then(data => setPhoto(data))
    }

    useEffect(() => {
        fetchh(id)
    }, [])
  return (
    <div>
        <button onClick={back}>back</button>
        <img src={photo?.url} alt="" />
    </div>
  )
}
