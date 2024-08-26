import React, { useState, useEffect } from 'react';
import career from "../../../assets/career/career.jpg";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../../firebase/firebase";
import Loader from '../../Items/Loader';

function Career() {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate()

    const navigateTo = (path) => {
        window.scrollTo(0, 0)
        navigate(path)
    }
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'jobvacancy'));
                const jobLists = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setJobs(jobLists);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div className='bg-white h-auto p-6 md:p-12'>
            <div className='text-center '>
                <h1 className='text-4xl md:text-6xl font-semibold text-gray-800'>Career</h1>
            </div>
            <div className='flex justify-center '>
                <img src={career} alt="Career" className='object-fit md:w-2/5 md:h-96 rounded-lg ' />
            </div>
            <div className='text-center text-lg md:text-xl text-gray-700 mb-8 mx-auto max-w-3xl'>
                <p>Together, all the way. We're a global leader in container trade and logistics, and we're embarking on an industry-defining transformation that will change the way the world moves. It’s a big moment for all of us – and we all have our part to play. Are you ready?</p>
            </div>
            {jobs.length > 0 ? (
                <div className='max-w-5xl mx-auto'>
                    <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center'>We are looking for</h2>
                    <div className=' grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        {jobs.map((job) => (
                            <div key={job.id} className="bg-gray-30 flex flex-col p-6 border border-gray-300 rounded-lg shadow-lg  hover:bg-gray-100 transition-transform transform hover:scale-105">
                                <h3 className="text-xl font-semibold text-gray-900">{job.position}</h3>
                                <p className="text-md text-gray-600 mt-2">{job.department}</p>
                                {/* <Link
                                    to={`/jobdetails/${job.id}`} className="">
                                    <button className="w-16 mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 px-2 px-none rounded-lg transition-colors duration-300">
                                        View
                                    </button>
                                </Link> */}

                                <button
                                    // aria-label={`View ${post.name}`}
                                    onClick={() => navigateTo(`/jobdetails/${job.id}`)}
                                    className="w-16 mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 px-2 px-none rounded-lg transition-colors duration-300">

                                    View
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
}

export default Career;
