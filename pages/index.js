import { useState, useEffect } from 'react'

function Home () {
    //"https://www.instagram.com/$otherPage/?__a=1"
    const [profile, setProfile] = useState([])

    useEffect(async () => {
        const response = await fetch('https://api.github.com/') 
        const data = await response.json()
        setProfile(data)
    }, [])

    return (
        <div>
            <h1>{profile.current_user_url}</h1>
            <h2>Testando: {profile.current_user_url}</h2>
        </div>
    )
    
}

export default Home