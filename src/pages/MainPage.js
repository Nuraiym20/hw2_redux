import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function MainPage() {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => setPhotos(data))
    }, [])
  return (
    <div>
        MainPage
        {
            photos.map(i => <div key={i?.id}>
                <Link to={`/about/${i?.id}`}>
                <img style={{width: 200, height: 200}} src={i?.url} alt="" />
                </Link>
            </div>)
        }
    </div>
  )
}
