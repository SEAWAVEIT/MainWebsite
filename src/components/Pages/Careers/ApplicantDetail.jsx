import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db, getDoc, doc } from "../../../firebase/firebase";
import { format } from 'date-fns';
import Loader from '../../Items/Loader';

function ApplicantDetail() {
    const [applicant, setApplicant] = useState(null);
    const { applicantId } = useParams();

    useEffect(() => {
        const fetchApplicant = async () => {
            try {
                const docRef = doc(db, 'applicants', applicantId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    const createdAt = data.createdAt?.toDate();

                    setApplicant({
                        id: docSnap.id,
                        ...data,
                        createdAt
                    });
                } else {
                    console.log("No such Data!");
                }
            } catch (error) {
                console.log("Error fetching Data:", error);
            }
        };

        fetchApplicant();
    }, [applicantId]);

    if (!applicant) {
        return <Loader />;
    }

    return (
        <div className="bg-white h-auto py-12 px-6 lg:px-12">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-semibold text-gray-800">{applicant.position}</h1>
                </div>
                <div className="text-center mb-6 border-t-2 border-b-2 border-gray-200 py-4">
                    <h2 className="text-2xl font-semibold text-blue-700">{applicant.name}</h2>
                    <p className="text-gray-600 text-lg mt-2">
                        {applicant.createdAt ? format(applicant.createdAt, 'MMMM d, yyyy') : 'No date available'}
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="text-lg text-gray-800">
                        <strong>Email:</strong> {applicant.email}
                    </div>
                    <div className="text-lg text-gray-800">
                        <strong>Position:</strong> {applicant.position}
                    </div>
                    <div className="text-lg text-gray-800">
                        <strong>Willing to Relocate:</strong> {applicant.relocate}
                    </div>
                    <div className="text-lg text-gray-800">
                        <strong>Experience:</strong> {applicant.experience}
                    </div>
                    <div className="text-lg text-gray-800">
                        <strong>Resume:</strong> <a href={applicant.resumeURL} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">View Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApplicantDetail;
