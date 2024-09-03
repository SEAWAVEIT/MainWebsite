import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { collection, doc, updateDoc, onSnapshot } from 'firebase/firestore';
import Loader from '../../Items/Loader';
import { db } from "../../../firebase/firebase";

function AdminCareerEditAllowance() {
    const [jobs, setJobs] = useState([]);
    const [blockedJobs, setBlockedJobs] = useState(new Set());
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'jobvacancy'), (querySnapshot) => {
            const jobLists = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setJobs(jobLists);
            const blockedJobIds = jobLists.filter(job => job.isBlocked).map(job => job.id);
            setBlockedJobs(new Set(blockedJobIds));
        }, (error) => {
            console.error('Error fetching jobs:', error);
        });

        return () => unsubscribe();
    }, []);

    const toggleBlock = async (jobId) => {
        try {
            const jobRef = doc(db, "jobvacancy", jobId);
            const job = jobs.find(job => job.id === jobId);
            if (job) {
                const newStatus = !job.isBlocked;
                await updateDoc(jobRef, { isBlocked: newStatus });
                setBlockedJobs(prev => {
                    const newBlockedJobs = new Set(prev);
                    newStatus ? newBlockedJobs.add(jobId) : newBlockedJobs.delete(jobId);
                    return newBlockedJobs;
                });
            }
        } catch (error) {
            console.error('Error toggling block status:', error);
        }
    };

    return (
        <div className='h-auto py-20'>
            {jobs.length > 0 ? (
                <div className='max-w-5xl mx-auto'>
                    <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center'>Edit Career Posts</h2>
                    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        {jobs.map((job) => (
                            <div
                                key={job.id}
                                className={`relative flex flex-col p-6 border border-gray-300 rounded-lg shadow-lg transition-transform transform ${blockedJobs.has(job.id) ? 'bg-gray-200' : 'bg-gray-50'}`}
                            >
                                {blockedJobs.has(job.id) && (
                                    <div className='absolute inset-0 flex items-center justify-center bg-opacity-75 bg-gray-500 text-white text-xl font-bold'>
                                        Blocked
                                    </div>
                                )}
                                <h3 className={`text-xl font-semibold ${blockedJobs.has(job.id) ? 'text-gray-400' : 'text-gray-900'}`}>
                                    {job.position}
                                </h3>
                                <p className={`text-md ${blockedJobs.has(job.id) ? 'text-gray-300' : 'text-gray-600'} mt-2`}>
                                    {job.department}
                                </p>
                                <div className='flex flex-row gap-4'>
                                    <button
                                        onClick={() => toggleBlock(job.id)}
                                        className={`w-20 mt-4 ${blockedJobs.has(job.id) ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'} text-white text-sm py-1 px-2 rounded-lg transition-colors duration-300`}
                                    >
                                        {blockedJobs.has(job.id) ? 'Unblock' : 'Block'}
                                    </button>
                                </div>
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

export default AdminCareerEditAllowance;
