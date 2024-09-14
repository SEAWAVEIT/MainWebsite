import React, { useState, useEffect } from 'react';
import career from "../../../assets/career/Hero.webp";
import { Link, useNavigate } from "react-router-dom";
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from "../../../firebase/firebase";
import Loader from '../../Items/Loader';

function Career() {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'jobvacancy'), (querySnapshot) => {
            const jobLists = querySnapshot.docs
                .map(doc => ({ id: doc.id, ...doc.data() }));
            setJobs(jobLists);
        }, (error) => {
            console.error('Error fetching jobs:', error);
        });

        return () => unsubscribe();
    }, []);

    const navigateTo = (path) => {
        window.scrollTo(0, 0);
        navigate(path);
    };

    return (
        <div className='bg-white h-auto p-6 md:p-12'>
            <div className='text-center'>
                <h1 className='text-4xl md:text-6xl font-semibold text-gray-800'>Career</h1>
            </div>
            <div className='flex justify-center'>
                <img src={career} alt="Career" className='object-fit md:h-96 h-64  py-8 rounded-lg' />
            </div>
            <div>
                <h2 className='text-center font-semibold text-2xl'>Share Your Resume: <Link to='mailto:hr@seawave.in'>
                    <span className='text-blue-600'>hr@seawave.in</span>
                </Link></h2>
            </div>
            <div className='text-center text-lg md:text-xl text-gray-700 mb-8 mx-auto max-w-3xl'>
                <p>Together, all the way. We're a global leader in container trade and logistics, and we're embarking on an industry-defining transformation that will change the way the world moves. It’s a big moment for all of us – and we all have our part to play. Are you ready?</p>
            </div>
            {jobs.length > 0 ? (
                <div className='max-w-5xl mx-auto'>
                    <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center'>We are looking for</h2>
                    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        {jobs.map((job) => (
                            <div key={job.id} className={`bg-gray-200 flex flex-col p-6 border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative ${job.isBlocked ? 'bg-gray-300' : 'bg-white'}`}>
                                {job.isBlocked && (
                                    <div className='absolute inset-0 flex items-center justify-center bg-opacity-75 bg-gray-500 text-white text-xl font-bold'>
                                        Currently Unavailable
                                    </div>
                                )}
                                <h3 className={`text-xl  font-semibold ${job.isBlocked ? 'text-gray-400' : 'text-gray-900'}`}>
                                    {job.position}
                                </h3>
                                <p className={`text-md ${job.isBlocked ? 'text-gray-300' : 'text-gray-600'} mt-2`}>Department : {" "}
                                    {job.department}
                                </p>
                                <button
                                    onClick={() => navigateTo(`/jobdetails/${job.id}`)}
                                    className={`w-16 mt-4 ${job.isBlocked ? 'bg-gray-600 hover:bg-gray-700' : 'bg-blue-600 hover:bg-blue-700'} text-white text-sm py-1 px-2 rounded-lg transition-colors duration-300`}
                                    disabled={job.isBlocked}
                                >
                                    {job.isBlocked ? 'View' : 'View'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className='max-w-5xl mx-auto'>
                    <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center'>We are looking for</h2>
                    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="bg-gray-200 flex flex-col p-6 border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative">
                                <h3 className="text-xl font-semibold skeleton h-6 w-48 mb-2" />
                                <p className="text-md skeleton h-4 w-48 mt-2" />
                                <button
                                    className="w-16 mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm py-1 px-2 rounded-lg transition-colors duration-300 skeleton"
                                    disabled={true}
                                >
                                    View
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Career;
