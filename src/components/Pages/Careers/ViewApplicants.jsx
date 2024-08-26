import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { db, getDocs, collection } from "../../../firebase/firebase";
import Loader from '../../Items/Loader';
import SortBy from "../../Items/SortBy"


function ViewApplicants() {
    const [sortedApplicants, setSortedApplicants] = useState([])
    const [applicants, setApplicants] = useState([]);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        window.scrollTo(0, 0);
        navigate(path);
    };

    useEffect(() => {
        const fetchApplicants = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'applicants'));
                const applicantsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setApplicants(applicantsList);
                setSortedApplicants(applicantsList)
            } catch (error) {
                console.error('Error fetching applicants:', error);
            }
        };
        fetchApplicants();
    }, []);

    const handleSort = (sortOption) => {
        let sortedArray = [...applicants]
        switch (sortOption) {
            case 'date-newest':
                sortedArray.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'date-oldest':
                sortedArray.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;

            default:
                sortedArray = [...applicants];
                break;
        }
        setSortedApplicants(sortedArray)
    }

    return (
        <div className="bg-white px-6 py-16 md:px-12 mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Applied Applicants</h1>
            </div>
            <div>
                <SortBy onSort={handleSort} />
            </div>
            {applicants.length > 0 ? (
                <div className="grid lg:grid-cols-1 gap-6">
                    {sortedApplicants.map((applicant) => (
                        <div
                            onClick={() => handleNavigate(`/applicantDetail/${applicant.id}`)}
                            key={applicant.id} className="flex flex-col p-6 border border-gray-300 rounded-lg shadow-md bg-white hover:bg-black hover:text-white text-black h-40 transition ease-in-out duration-150">
                            <div className="flex-1 mb-4">
                                <h2 className="text-2xl font-semibold ">{applicant.name}</h2>
                                <h3 className="text-lg  mt-1 truncate">{applicant.position}</h3>
                            </div>
                            {/* <div className=" flex justify-end">
                                <button

                                    className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
                                    View
                                </button>
                            </div> */}
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
