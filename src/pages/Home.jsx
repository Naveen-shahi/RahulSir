import React, {useState, useEffect} from 'react'
import {Gallery} from './index'


function Home() {
    const [count, setcount] = useState(1)
    const [count2, setcount2] = useState(3)
    
    useEffect(() => {
       console.log('text');
    }, [count])

    const addCounter = () =>{
        setcount(count + 1)
    }
    const addCounter2 = () =>{
        setcount2(count2 + 1)
    }
    console.log(count,'count');
    const data = [1,2,3,4,5]
    return (
        <>
            {
                data.map((value,index)=>{
                    return(
                        <React.Fragment  key={value}>
                        <span>{value}</span> <br></br>
                        </React.Fragment>
                    )
                })
            }
            Home Page  
            <Gallery count={count} type="forwardprops" onclick={()=>alert('hello world')} /> 
            {count} count ,
            {count2} count2
            <button type="button" onClick={addCounter2}>click2 me</button>
            <button type="button" onClick={addCounter}>click me</button>
        </>
    )
}

export default Home;
