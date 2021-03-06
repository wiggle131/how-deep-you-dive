import React, { useState,useEffect } from "react";

const Edit = ({setEditing, currentUser, updateUser, typeMeasure}) => {
    const [user, setUser] = useState(currentUser)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value})
    }

    useEffect(() => {
        setUser(currentUser)
    }, [currentUser])

    return(
        <form className='grid grid-cols-1 grid-rows-2 grid-flow-col h-screen w-1/2 place-items-center'
            onSubmit={(event) => {
                event.preventDefault()

                updateUser(user.id, user)
            }}
        
        >
            <div className='font-Lobster text-center '>
               <p className='text-5xl paint-msf text-stroke-8 text-stroke-pink '>How Deep Did You</p>
               <p className='text-[204px] paint-msf text-stroke-8 text-stroke-pink leading-[10rem]'>Dive?</p>
            </div>
            <div className='flex flex-col font-Open-Sans text-xl  font-bold shadow-lg p-5 rounded-lg bg-gradient-to-b from-[#2D92D1]'>
                <div className='flex justify-center text-3xl font-Lobster my-2'>
                    <p>Editing</p>
                </div>
                <div className='text-base'>
                    <label>
                    Name
                    </label>
                    <input
                        type='text'
                        name='name'   
                        className="w-full font-Open-Sans form-control mb-4 flex-auto min-w-0 block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                        value={user.name}
                        onChange={handleInputChange}
                />
                </div>
                <div className='text-base'>
                    <label>
                    Depth
                    </label>
                    <input
                        type='number'
                        name='depth'   
                        className="font-Open-Sans form-control mb-4  min-w-0 block w-96  px-3 py-1.5 text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                        value={user.depth}
                        onChange={handleInputChange}
                />
                    <select className="form-select appearance-none
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        cursor-pointer
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
                        name='type'
                        onChange={handleInputChange}
                        >
                    <option selected>m/feet</option>
                    <option value="Meters">Meters</option>
                    <option value="Feet">Feet</option>
                    </select>
                </div>
                <div className='flex justify-center my-4'>
                    <button className="h-10 w-fit bg-gradient-to-r from-[#D12E64] to-[#F497B6] btn font-Open-Sans inline-block px-6 py-2 bg-white text-base leading-tight uppercase rounded-3xl hover:background-animate  focus:outline-none focus:ring-0 transition duration-150 ease-in-out" 
                        >
                            Update
                    </button>
                     <button 
                    className="h-10 w-fit bg-gradient-to-r from-[#D12E64] to-[#F497B6] btn font-Open-Sans inline-block px-6 py-2 bg-white text-base leading-tight uppercase rounded-3xl hover:background-animate  focus:outline-none focus:ring-0 transition duration-150 ease-in-out" 
                    onClick={() => setEditing(false)}
                >
                    Cancel
                </button>
                </div>
            </div>
        </form>
    );
}

export default Edit;