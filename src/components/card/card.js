import React from 'react'
import {MdDeleteOutline} from "react-icons/md"
import nasa from "../../assets/NASA_logo.svg.png"

const DisplayCard = (props) => {
    return (
        <label htmlFor="my-modal-3" className="card hover:border-2  bg-[#000000] bg-opacity-20 border min-w-[250px] max-w-[320px] h-[375px] cursor-pointer">
            <div className="grid grid-cols-1">
                <div class="p-3">
                    <img className='mx-auto w-full  max-h-[170px]  object-cover' src={nasa} alt="logo" />
                    <h2 class="card-title py-3 text-white">Bunchinko</h2>
                    <p className='text-xs text-white flex gap-2 items-center mb-1'>Created On Monday</p>
                    <p className='text-xs text-white'>chinbonko</p>
                    <h2 class="card-title text-info text-white pt-3">$ 100</h2>
                </div>
                
                <div className="card-button flex justify-between" onClick={()=>props.setSelectedOrder(props.orderId)}>
                    <label htmlFor="my-drawer-4" className="btn btn-ghost text-white">
                        View Details
                    </label>
                    <div className='pr-4 pt-3'><MdDeleteOutline className='text-2xl text-white'/></div>
                </div>
            </div>
        </label>
    )
}

export default DisplayCard
