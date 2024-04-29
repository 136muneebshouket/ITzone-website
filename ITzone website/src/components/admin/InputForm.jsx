'use client';
import { button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";

const InputForm = ({ formData, setFormData }) => {
    
    const [localFormData, setLocalFormData] = useState([
        { heading: '', content: '' },
    ]);
    const [showModel, setShowModel] = useState(false); // State for modal visibility

    const handleAddInput = (e) => {
        e.preventDefault();
        setLocalFormData([...localFormData, { heading: '', content: '' }]);
        // Update parent state with new data
        setFormData((prevData) => ({
            ...prevData,
            accordions: [...prevData.accordions, ...localFormData],
        }));
        // Reset local state for new inputs
        setLocalFormData([{ heading: '', content: '' }]);
    };

    const handleChange = (index, event) => {
        const updatedLocalData = [...localFormData];
        updatedLocalData[index][event.target.name] = event.target.value;
        setLocalFormData(updatedLocalData);
    };

    const handleDeleteAccordion = (index) => {
        
        const updatedLocalData = [...localFormData];
        updatedLocalData.splice(index, 1); // Remove the item at the specified index
        setLocalFormData(updatedLocalData);
        // Update parent state with removed data (optional)
        setFormData((prevData) => ({
            ...prevData,
            accordions: prevData.accordions.filter((_, i) => i !== index), // Filter out removed item
        }));
    };

    // const handleShowModel = (e) => {
    //     e.preventDefault();
    //     setShowModel(!showModel); // Toggle model visibility
    // };

    return (
        <div className="flex flex-col space-y-2">
            <h4 className='text-2xl text-white m-0 p-0'>Accordian Data</h4>
            {localFormData.map((item, index) => (
                <div key={index} className="flex flex-col py-0 my-0 ">
                    <div>
                        <label htmlFor={`heading-${index}`} className="text-gray-700 font-bold">
                            Heading:
                        </label>
                        <input
                            type="text"
                            id={`heading-${index}`}
                            name="heading"
                            value={item.heading}
                            onChange={(event) => handleChange(index, event)}
                            className="px-3 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor={`content-${index}`} className="text-gray-700 font-bold">Content:</label>
                        <textarea
                            id={`content-${index}`}
                            name="content"
                            value={item.content}
                            onChange={(event) => handleChange(index, event)}
                            className="px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 h-12 resize-none" // Adjusted height for content
                        />
                    </div>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                        onClick={() => handleDeleteAccordion(index)}
                    >
                        Delete
                    </button>
                </div>
            ))}
            <div className="flex justify-between items-center">
                <button
                    onClick={handleAddInput}
                    className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 w-1/2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
                >
                    Add New Input
                </button>
                </div>

            {showModel ? (
                
                <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50">
                    <button onClick={setShowModel(false)}><IoClose /></button>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4 shadow-lg">
                        <h3 className="text-xl font-bold mb-2">Current Accordions</h3>
                        <ul>
                            {localFormData.map((item, index) => (
                                <li key={index} className="flex justify-between items-center py-1">
                                    <span>{item.heading}</span>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                                        onClick={() => handleDeleteAccordion(index)}
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            onClick={setShowModel(false)}
                        >
                            Close Model
                        </button>
                    </div>
                </div>
            )
        
        : null}

        </div>
    );
};

export default InputForm;
