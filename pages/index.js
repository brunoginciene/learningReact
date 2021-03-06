import { useState, useEffect } from 'react'

function Home() {
    //"https://www.instagram.com/$otherPage/?__a=1"
    const [profile, setProfile] = useState([])
    const [time, setTime] = useState("")

    async function getData() {
        const response = await fetch('https://api.github.com/') 
        const data = await response.json()
        setProfile(data)
        
        let date = new Date()
        setTime(date.toGMTString())
    }

    useEffect(() =>{
        getData()

        const interval = setInterval(()=>{
            getData()
        }, 10000)

        return()=>clearInterval(interval)
        
    }, [])
    
    return (
        <div>
            <h1>{profile.current_user_url}</h1>
            <h2>Testando: {profile.current_user_url}</h2>
            <h2>Hora: {time}</h2>
        </div>
    )
    
}

export default Home