import React, { useState } from 'react'
import './Serp.css'
import key from './Key';

const Serp = () =>{
    const [search, setSearch] = useState("");
    const [error, setError] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!search){
            setError("Input the name of your client")
        }
        const myHeader = new Headers();
        myHeader.append("X-API-Key",key);
        myHeader.append("content-type","application/json")
        const body = {
            "q": search
        };
        const base_url = `https:s//google.serper.dev/places`;
        // const head = {
            
            
        // } 
        try {
            const fetchData = async () =>{
                await fetch(base_url, {
                    method:'POST',
                    headers: myHeader,
                    body: JSON.stringify (body),
                    redirect:'follow',
                    mode: "no-cors"
                })
                .then(res=>res)
                .then(response => console.log(response))
            }
        // console.log(search);
            fetchData()
        } catch (error) {
            
        }
        

    }
    return(
        <div>
            <form onSubmit={handleSubmit} action="">
                <input type="text" value={search} onChange={(event)=> setSearch(event.target.value)} placeholder='Search for your client here'/>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}
export default Serp;