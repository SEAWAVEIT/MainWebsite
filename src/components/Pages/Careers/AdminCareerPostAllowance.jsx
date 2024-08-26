import React, { useState } from 'react';
import { db, collection, addDoc } from "../../../firebase/firebase";
import { useNavigate } from 'react-router-dom';

function AdminCareerPostAllowance() {
    const [position, setPosition] = useState("");
    const [department, setDepartment] = useState("");
    const [overview, setOverview] = useState("");
    const [experience, setExperience] = useState("");
    const [responsibilities, setResponsibilities] = useState("");
    const [prerequisite, setPrerequisite] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const addPost = async (e) => {
        e.preventDefault();

        // Check if any field is empty
        if (!position || !department || !overview || !responsibilities || !prerequisite || !experience) {
            setError("All fields are required.");
            return;
        }

        try {
            await addDoc(collection(db, 'jobvacancy'), {
                position,
                department,
                overview,
                responsibilities,
                prerequisite,
                experience,
                createdAt: new Date(),
            });
            // Clear the fields and error
            setPosition("");
            setDepartment("");
            setOverview("");
            setResponsibilities("");
            setPrerequisite("");
            setExperience("");
            setError("");
            navigate('/admin');
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    return (
        <div className='bg-white h-auto'>
            <div>
                <div className="h-auto z-1 bg-white text-black px-6 py-10 w-full flex flex-col gap-6">
                    <div className="relative rounded-xl mb-6 md:mb-8">
                        <div>
                            {/* <img
                                className="w-full"
                                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHMxZXhzYTdhbXd1MXV1MTY3M2hienkxNGpmdm02OGRocjQxMGJ4dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/w5rTXEfu4as4YAR6QI/giphy.webp"
                                alt=""
                            /> */}
                        </div>
                        <div className="relative w-full h-96">
                            <img
                                className='object-cover w-full h-full rounded-xl'
                                src="https://img.freepik.com/free-photo/top-view-job-written-note-along-with-colorful-little-paper-notes-light-background-school-office-job-notepad-color-work_179666-18236.jpg?t=st=1723018914~exp=1723022514~hmac=5c15cfeb0ae22b7a2f83ecce5d904d4bd5b91be43683ea74a2d09b1a655acd06&w=740"
                                alt=""
                            />
                        </div>
                    </div>
                    <div>
                        <form onSubmit={addPost} className="InputDetails w-full grid grid-cols-1 gap-6">
                            <div className="w-full">
                                <label htmlFor="Position">*Position</label>
                                <input
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                    type="text"
                                    className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="Department">*Department</label>
                                <input
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                    type="text"
                                    className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="Overview">*Overview</label>
                                <input
                                    value={overview}
                                    onChange={(e) => setOverview(e.target.value)}
                                    type="text"
                                    className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
                                />
                            </div>

                            <div className="w-full">
                                <label htmlFor="Responsibilities">*Responsibilities</label>
                                <input
                                    value={responsibilities}
                                    onChange={(e) => setResponsibilities(e.target.value)}
                                    type="text"
                                    className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
                                />
                            </div>

                            <div className="w-full">
                                <label htmlFor="Prerequisite">*Prerequisite</label>
                                <input
                                    value={prerequisite}
                                    onChange={(e) => setPrerequisite(e.target.value)}
                                    type="text"
                                    className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
                                />
                            </div>

                            <div className="w-full">
                                <label htmlFor="Experience">*Experience <span className='text-sm text-red-500'>(in years)</span></label>
                                <input
                                    value={experience}
                                    onChange={(e) => setExperience(e.target.value)}
                                    type="text"
                                    className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
                                />
                            </div>

                            {error && (
                                <div className="w-full text-red-500 text-center mt-4">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="bg-blue-500 text-white font-semibold px-4 py-2 hover:text-slate-400 rounded-xl"
                            >
                                Post
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminCareerPostAllowance;
