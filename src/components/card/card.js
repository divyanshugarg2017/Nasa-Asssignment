import React from 'react'
import {MdDeleteOutline} from "react-icons/md"
import nasa from "../../assets/NASA_logo.svg.png"

const DisplayCard = ({title,url,date,setImageUrl}) => {
 
    return (
        <label onClick={(e)=>{setImageUrl(url)}} htmlFor="my-modal-3" className="card hover:border-2  bg-[#000000] bg-opacity-20 border min-w-[250px] max-w-[320px] h-[300px] cursor-pointer">
            <div className="grid grid-cols-1">
                <div class="p-3">
                    <img className='mx-auto w-full  max-h-[170px]  object-cover' src={url} alt="logo" />
                </div>
                
                <div className="card-button">
                    <label htmlFor="my-drawer-4" className="btn btn-ghost w-80 text-white">
                        {title}
                    </label>
                    <div className='flex justify-center'>
                    <div className='pr-4 pt-3 text-white text-base font-semibold'>{date}</div>
                    </div>
                   
                </div>
            </div>
        </label>
    )
}

export default DisplayCard
