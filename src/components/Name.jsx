import React from 'react'

function Name() {

    const reload = ()=>{
        window.location.href= '/'
    }
    return (
        <div className='namecontainer'>
            {/* <strong onClick={reload} className='nameTxt'>
                Kenny Rakentine
            </strong> */}
            <div className='nameImgBkg'>
            <img  onClick={reload} className='nameImg' src='https://i.ibb.co/TRg4Jcb/Name-TYPOGRAPHY3.png'></img>
            </div>
        </div>
    )
}

export default Name