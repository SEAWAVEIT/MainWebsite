import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { db, getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { format } from 'date-fns';
import Loader from '../../Items/Loader';


function AdminCareerEditAllowance() {
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
        <div className='h-auto py-20'>  {
            jobs.length > 0 ? (
                <div className='max-w-5xl mx-auto'>
                    <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center'>Edit Career Posts</h2>
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
                                <div className='flex flex-row gap-4'>
                                    <button
                                        // aria-label={`View ${post.name}`}
                                        onClick={() => navigateTo(`/jobdetails/${job.id}`)}
                                        className="w-16 mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 px-2 px-none rounded-lg transition-colors duration-300">

                                        Edit
                                    </button>
                                    <button
                                        // aria-label={`View ${post.name}`}
                                        onClick={() => navigateTo(`/jobdetails/${job.id}`)}
                                        className="w-16 mt-4 bg-red-600 hover:bg-red-700 text-white text-sm py-1 px-2 px-none rounded-lg transition-colors duration-300">
                                        Block
                                    </button></div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <Loader />
            )
        }</div>
    )
}

export default AdminCareerEditAllowance