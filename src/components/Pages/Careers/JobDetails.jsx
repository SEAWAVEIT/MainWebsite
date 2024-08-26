import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db, getDoc, doc } from "../../../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import Loader from '../../Items/Loader';

function JobDetails() {
    const [job, setJob] = useState(null);
    const { jobId } = useParams();
    const navigate = useNavigate()

    const navigateTo = (path) => {
        window.scrollTo(0, 0)
        navigate(path)
    }
    useEffect(() => {
        const fetchJob = async () => {
            try {
                const docRef = doc(db, 'jobvacancy', jobId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    const createdAt = data.createdAt?.toDate();
                    setJob({
                        id: docSnap.id,
                        ...data,
                        createdAt
                    });
                } else {
                    console.log("No such Job Created!");
                }
            } catch (error) {
                console.log("Error fetching document:", error);
            }
        };

        fetchJob();
    }, [jobId]);

    if (!job) {
        return <Loader />;
    }

    return (
        <div className="bg-white h-auto py-8 px-6 sm:px-12 lg:px-24">
            <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl shadow-lg p-6">
                <h3 className="text-4xl font-semibold mb-4 text-center text-gray-800">
                    {job.position}
                </h3>
                <div className="text-center mb-6 border-y-2 border-gray-300 py-2">
                    <span className="text-gray-600 font-medium">
                        {job.createdAt
                            ? format(job.createdAt, 'MMMM d, yyyy') // Format date
                            : 'No date available'}
                    </span>
                </div>
                <div className="mb-4 text-gray-700">
                    <h4 className="text-xl font-semibold mb-2">Department</h4>
                    <p className="font-serif">{job.department}</p>
                </div>
                <div className="mb-4 text-gray-700">
                    <h4 className="text-xl font-semibold mb-2">Overview</h4>
                    <p className="font-serif">{job.overview}</p>
                </div>
                <div className="mb-4 text-gray-700">
                    <h4 className="text-xl font-semibold mb-2">Experience</h4>
                    <p className="font-serif">{job.experience}</p>
                </div>
                <div className="mb-4 text-gray-700">
                    <h4 className="text-xl font-semibold mb-2">Responsibilities</h4>
                    <p className="font-serif">{job.responsibilities}</p>
                </div>
                <div className="mb-4 text-gray-700">
                    <h4 className="text-xl font-semibold mb-2">Prerequisites</h4>
                    <p className="font-serif">{job.prerequisite}</p>
                </div>
            </div>
            <div className="mt-6 flex justify-center">

                <button onClick={() => navigateTo(`/careerinputfield`)} className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-md transition duration-200">
                    Apply
                </button>


            </div>
        </div>
    );
}

export default JobDetails;
