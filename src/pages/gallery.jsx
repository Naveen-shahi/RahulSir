import React from 'react'

function gallery({type,onclick,count}) {
    const handleclick = () =>{
        onclick?.(); 
    }
    return (
        <div onClick={handleclick}>
            GAllery page 
            {type}{count}
        </div>
    )
}

export default gallery
