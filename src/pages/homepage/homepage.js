import React, { useState, useEffect } from 'react'
import DisplayCard from '../../components/card/card'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { responsive } from '../../utils/responsive';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Homepage() {
    const [apiData, setApiData] = useState([])
    const [imageUrl, setImageUrl] = useState()
    const [startDate, setStartDate] = useState("2022-01-01");
    const [endDate, setEndDate] = useState("2022-01-12");

    const manipulateDate = () => {
        let dateString = startDate;
        let myStartDate = new Date(dateString);
        myStartDate.setDate(myStartDate.getDate() + 7);
        let date = new Date(myStartDate.toDateString().replace('IST', ''));
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        myStartDate = year + "-" + month + "-" + day;
        setStartDate(myStartDate);

        dateString = endDate;
        let myEndDate = new Date(dateString);
        myEndDate.setDate(myEndDate.getDate() + 7);
        date = new Date(myEndDate.toDateString().replace('IST', ''));
        day = date.getDate();
        month = date.getMonth() + 1;
        year = date.getFullYear();
        myEndDate = year + "-" + month + "-" + day;
        setEndDate(myEndDate);

    }

    const getNasaData = () => {
        setTimeout(() => {
            fetch(`https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date=${startDate}&end_date=${endDate}&thumbs=true`)
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    setApiData([...apiData, ...json]);
                    manipulateDate();
                })
        }, 500);
    }


    useEffect(() => {
        getNasaData()
        window.onscroll = function() {
            if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
             alert("At the bottom!")
            }
           }
    }, [])

    const displayImage = () => {
        if (apiData?.[apiData?.length - 1]?.media_type == "image") {
            return (<label htmlFor="my-modal-3">
                {apiData ? <img onClick={(e) => { setImageUrl(apiData[apiData?.length - 1]?.url) }} src={apiData[apiData?.length - 1]?.url} className="max-w-sm rounded-lg shadow-2xl w-full flex justify-center object-cover   lg:w-[400px] h-[400px] " alt="placeholder" />
                    : <div className='w-[300px] h-[200px] border'></div>}
            </label>)
        } else {
            return (<div>
                <source src={apiData[apiData?.length - 1]?.url} type="video/mp4" />
            </div>)
        }

    }

    return (
        <div>

            <div className='min-h-screen bg-[#000000] px-10 pb-20'>
                <div className="hero h-auto  bg-[#000000] sm:pt-20 lg:pt-20">
                    <div className="hero-content flex-col lg:flex-row-reverse ">
                        <div>
                            {displayImage()}
                        </div>


                        <div className='pr-10'>
                            <h1 className='text-5xl text-white font-black pb-20 lg:text-7xl'>Divyanshu Garg</h1>
                            <h1 className="text-5xl text-white font-bold lg:max-w-[500px]">{apiData?.[apiData.length - 1]?.title}</h1>
                            <p title={apiData?.[apiData.length - 1]?.explanation} className="py-6 text-white lg:max-w-[500px]" >{apiData[apiData?.length - 1]?.explanation.substring(0, apiData[0]?.explanation.length / 2)}...</p>
                            <p className="py-6 text-white font-semibold">Author : {apiData[apiData.length - 1]?.copyright}</p>

                        </div>
                    </div>
                </div>


                <InfiniteScroll
                    dataLength={apiData.length}
                    next={getNasaData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    scrollThreshold="500px"
                    pullDownToRefreshThreshold
                >

                    <div className='pt-40  grid grid-cols-1 gap-4 items-center '>
                        <Carousel responsive={responsive} itemClass="carouselItem">
                            {
                                apiData?.map((item, index) => {
                                    return (
                                        <DisplayCard
                                            setImageUrl={setImageUrl}
                                            title={item.title}
                                            url={item.url}
                                            date={item.date}
                                        />
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </InfiniteScroll>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal rounded-lg">
                    <div className="modal-box rounded-lg relative bg-[#000000] ">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <img className='' src={imageUrl} alt="overlayImage" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage