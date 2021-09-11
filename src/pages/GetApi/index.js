import React, { useEffect, useState } from 'react'
import './style.css';
import { useParams ,Link , useHistory  } from 'react-router-dom';


function GetApi() {

    const [state, setstate] = useState([])
    const { start , limit } = useParams();
 
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`)
            .then(response => {
                return response.json()
            })
            .then((data) => {
                //   const mydata =   JSON.parse(data)
                setstate(data)
            })
            .catch(error => {
                console.log(error);
            });
    }, [start,limit])

    return (

        <div>
            <h1>Get api </h1>
            <div className="">
            <Link to={`/Getapi/${+start !== 0?`${start - 1}`:`${start}`}/${limit}`}>
                <button type="button" className={`${start === 0?'Disabled':''}`}>Previous </button> 
            </Link>
            <Link to={`/Getapi/${parseInt(start) + 1}/${limit}`}>
                <button type="button">Next</button> 
            </Link>
            </div>
            <div className="d-flex">
            {
                state.map((value, index) => {
                    return (
                        <div key={value.id} className="card">
                                <h3>{value.id} {value.title}</h3>
                                <p>{value.body}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default GetApi
