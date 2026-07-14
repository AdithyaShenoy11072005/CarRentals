import React from 'react'
import { assets, cities } from '../assets/data'

const Hero = () => {
    return (
        <section className='bg-primary'>
            {/*CoNTAINER*/}
            <div className='max-padd-containur relative flex justify-end mx-auto flex-col gap-9 py-6 pt-32 z-10'>

                {/* Content */}
                <div className='flexCenter flex-col gap-y-6'>
                    <div className='text-center max-w-5xl'>
                        <h1 className='capitalize leading-tight'>Explore <span className='bg-gradient-to-r from-blue-400 to-blue-500 pl-1 rounded-md'>premium vehicles</span> Available in Exciting destinations.</h1>
                    </div>
                    <form className='bg-white text-gray-500 rounded-lg px-6 py-4  flex flex-col md:flex-row gap-4 lg:gap-x-8 max-w-md md:max-w-4xl ring-1 ring-slate-900/5 relative'>
                        <div className="flexx flex-col w-full">
                        <div className='flex items-center gap-2'>
                        <img src={assets.pin} alt="pinIcon" width={20}/>
                        <label htmlFor="destinationInput">Destination </label>
                        </div>
                    <input 
                    list="destinations"
                    id="destinationInput"
                    type="text"
                    className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none capitalize"
                    placeholder="Type here"
                    required
                        />
                    <datalist id="destinations">
                        {cities.map((city, index) => (
                            <option value={city} key={index} />
                        ))}
                    </datalist>
                        </div>
                        <div className="flexx flex-col w-full">
                        <div className='flex items-center gap-2'>
                            <img src={assets.calendar} alt="calendarIcon" width={20}/>
                                <label htmlFor="PickUp">Pick up</label>
                            </div>
                            <input 
                            id="PickUp" 
                            type="date" 
                            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                        </div>

                        <div>
                            <div className='flex items-center gap-2'>
                                <img src={assets.calendar} alt="calendarIcon" width={20}/>
                                <label htmlFor="dropoff">Check out</label>
                            </div>
                            <input id="dropoff"
                             type="date" 
                             className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                        </div>


                        <button type="submit" className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto max-md:w-full max-md:py-1 cursor-pointer' >
                           <img src={assets.search} alt="searchIcon" width={20}
                           className="invert"/>
                            <span>Search</span>
                        </button>
                    </form>


                </div>
                <div className='flexCenter'>
                    <img src={assets.bg} alt="bgImg" className='w-full max-w-[77%]' />
                </div>
            </div>
        </section>
    )
}

export default Hero