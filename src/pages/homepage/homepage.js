import React, { useState, useEffect } from 'react'
import DisplayCard from '../../components/card/card'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { responsive } from '../../utils/responsive';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



function Homepage() {
    const [apiData, setApiData] = useState()
    const [imageUrl,setImageUrl] = useState()

    const getNasaData = async () => {
        const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date=2022-10-01&end_date=2022-10-29&thumbs=true")
        setApiData(response)
    }


    useEffect(() => {
        getNasaData()
    }, [])

    const displayImage = () => {
        if (apiData?.data[apiData?.data.length - 1]?.media_type == "image") {
            return (<label htmlFor="my-modal-3">
                {apiData ? <img onClick={(e)=>{setImageUrl(apiData?.data[apiData?.data.length - 1]?.url)}} src={apiData?.data[apiData?.data.length - 1]?.url} className="max-w-sm rounded-lg shadow-2xl w-full flex justify-center object-cover   lg:w-[400px] h-[400px] " alt="placeholder" />
                    : <div className='w-[300px] h-[200px] border'></div>}
            </label>)
        } else {
            return (<div>
                <source src={apiData?.data[apiData?.data.length - 1]?.url} type="video/mp4" />
            </div>)
        }

    }

    return (
        <div className='min-h-screen bg-[#000000] px-10 pb-20'>
            <div className="hero h-auto  bg-[#000000] sm:pt-20 lg:pt-20">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div>
                        {displayImage()}
                    </div>


                    <div className='pr-10'>
                        <h1 className='text-5xl text-white font-black pb-20 lg:text-7xl'>Divyanshu Garg</h1>
                        <h1 className="text-5xl text-white font-bold lg:max-w-[500px]">{apiData?.data[apiData?.data.length - 1].title}</h1>
                        <p title={apiData?.data[0].explanation} className="py-6 text-white lg:max-w-[500px]" >{apiData?.data[apiData?.data.length - 1].explanation.substring(0, apiData?.data[0].explanation.length / 2)}...</p>
                        <p className="py-6 text-white font-semibold">Author : {apiData?.data[apiData?.data.length - 1].copyright}</p>

                    </div>
                </div>
            </div>
            <div className='pt-40  grid grid-cols-1 gap-4 items-center '>
                <Carousel responsive={responsive} itemClass="carouselItem">
                    <DisplayCard />
                    <DisplayCard />
                    <DisplayCard />
                    <DisplayCard />
                    <DisplayCard />
                    <DisplayCard />
                    <DisplayCard />
                </Carousel>

            </div>
            <div className='pt-40  grid grid-cols-1 gap-4 items-center '>
                <Carousel responsive={responsive} itemClass="carouselItem">
                    <DisplayCard />
                    <DisplayCard />
                    <DisplayCard />
                    <DisplayCard />
                    <DisplayCard />
                    <DisplayCard />
                    <DisplayCard />
                </Carousel>
            </div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal rounded-lg">
                <div className="modal-box rounded-lg relative bg-[#000000] ">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img className='' src={imageUrl} alt="overlayImage"/>
                </div>
            </div>
        </div>
    )
}

export default Homepage