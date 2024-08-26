import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { db, getDocs, collection } from "../../../firebase/firebase";
import Loader from '../../Items/Loader';

function ViewApplicants() {
    const [applicants, setApplicants] = useState([]);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        window.scrollTo(0, 0);  // Scroll to the top of the page
        navigate(path);         // Navigate to the given path
    };

    useEffect(() => {
        const fetchApplicants = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'applicants'));
                const applicantsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setApplicants(applicantsList);
            } catch (error) {
                console.error('Error fetching applicants:', error);
            }
        };
        fetchApplicants();
    }, []);

    return (
        <div className="bg-white px-6 py-16 md:px-12 mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Applied Applicants</h1>
            </div>
            {applicants.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {applicants.map((applicant) => (
                        <div key={applicant.id} className="flex flex-col p-6 border border-gray-300 rounded-lg shadow-md bg-white hover:bg-gray-50 transition ease-in-out duration-150">
                            <div className="flex-1 mb-4">
                                <h2 className="text-2xl font-semibold text-gray-900">{applicant.position}</h2>
                                <h3 className="text-lg text-gray-600 mt-1 truncate">{applicant.name}</h3>
                            </div>
                            <div className=" flex flex-start">
                                <button
                                    onClick={() => handleNavigate(`/applicantDetail/${applicant.id}`)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
                                    View
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
}

export default ViewApplicants;
