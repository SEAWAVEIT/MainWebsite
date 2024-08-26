import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db, getDoc, doc } from "../../../firebase/firebase";
import { format } from 'date-fns';
import Loader from '../../Items/Loader';

function QuoteDetails() {
    const [quote, setQuote] = useState(null);
    const { quoteId } = useParams();

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const docRef = doc(db, 'quotes', quoteId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    const createdAt = data.createdAt?.toDate();

                    setQuote({
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

        fetchQuote();
    }, [quoteId]);

    if (!quote) {
        return <Loader />;
    }
    const servicesDisplay = quote.services
        ? quote.services.map(service => service.toUpperCase()).join(' | ')
        : 'No services available';

    return (
        <div className="bg-white h-auto py-12 px-6 lg:px-12">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-semibold text-gray-800">{quote.companyName}</h1>
                </div>
                <div className="text-center mb-6 border-t-2 border-b-2 border-gray-200 py-4">
                    <h2 className="text-2xl font-semibold text-blue-700">{servicesDisplay}</h2>
                    <p className="text-gray-600 text-lg mt-2">
                        {quote.createdAt ? format(quote.createdAt, 'MMMM d, yyyy') : 'No date available'}
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="text-lg text-gray-800">
                        <strong>By: </strong> {quote.name}
                    </div>
                    <div className="text-lg text-gray-800">
                        <strong>Email: </strong> {quote.email}
                    </div>
                    <div className="text-lg text-gray-800">
                        <strong>Contact Number: </strong> {quote.contactNumber}
                    </div>
                    <div className="text-lg text-gray-800">
                        <strong>Company Address: </strong> {quote.companyAddress}
                    </div>
                    <div className="text-lg text-gray-800">
                        <strong>Services: </strong> {servicesDisplay}
                    </div>
                    <div className="text-lg text-gray-800">
                        <strong>Comments: </strong> {quote.comments}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default QuoteDetails