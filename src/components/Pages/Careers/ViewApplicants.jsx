import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { db, getDocs, collection } from "../../../firebase/firebase";
import Loader from '../../Items/Loader';
import { format } from 'date-fns';
import DatePicker from "../../Items/DatePicker"

function ViewApplicants() {
    const [sortedApplicants, setSortedApplicants] = useState([]);
    const [applicants, setApplicants] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        window.scrollTo(0, 0);
        navigate(path);
    };

    useEffect(() => {
        const fetchApplicants = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'applicants'));
                const applicantsList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    createdAt: doc.data().createdAt?.toDate()
                }));
                setApplicants(applicantsList);
                setSortedApplicants(applicantsList);
            } catch (error) {
                console.error('Error fetching applicants:', error);
            }
        };
        fetchApplicants();
    }, []);

    useEffect(() => {
        handleFilter(selectedDate);
    }, [selectedDate]);

    const handleFilter = (date) => {
        let filteredArray = [...applicants];
        if (date) {
            filteredArray = filteredArray.filter(applicant => {

                const createdAt = new Date(applicant.createdAt);
                return createdAt.toDateString() === date.toDateString();
            });
        }
        setSortedApplicants(filteredArray);
    };

    return (
        <div className="bg-white px-6 py-16 md:px-12 mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Applied Applicants</h1>
            </div>
            <div>
                <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} />
            </div>
            {applicants.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                    {sortedApplicants.map((applicant) => (
                        <div
                            onClick={() => handleNavigate(`/applicantDetail/${applicant.id}`)}
                            key={applicant.id}
                            className="flex flex-col p-6 border border-gray-300 rounded-lg shadow-md bg-white hover:bg-blue-50 text-black h-40 transition ease-in-out duration-150">
                            <div className="flex-1 mb-4">
                                <h2 className="text-2xl font-semibold">{applicant.name}</h2>
                                <h3 className="text-lg mt-1 truncate">{applicant.position}</h3>
                                <span className="text-gray-500 mt-2 truncate w-full text-end">
                                    {applicant.createdAt ? format(applicant.createdAt, 'MMMM d, yyyy') : 'No date available'}
                                </span>
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
