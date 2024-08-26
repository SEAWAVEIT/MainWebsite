import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { db, getDocs, collection } from "../../../firebase/firebase";
import Loader from '../../Items/Loader';

function ViewQuoteResquests() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const requestedQuoter = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'quotes'));
                const quoteList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setQuotes(quoteList);
            } catch (error) {
                console.error('Error fetching Quotes:', error);
            }
        };
        requestedQuoter();
    }, []);

    return (
        <div>
            <div className="flex flex-col bg-white h-auto px-6 py-12 md:px-12 mx-auto">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Requested Quote</h1>
                </div>
                {quotes.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {quotes.map((quote) => (
                            <div key={quote.id} className="h-44 flex flex-col p-6 border border-gray-300 rounded-lg shadow-md bg-white hover:bg-gray-50 transition ease-in-out duration-150 relative">
                                <div className="flex-1">
                                    <h2 className="text-2xl font-semibold text-gray-900">{quote.companyName}</h2>
                                    <h3 className="text-lg text-gray-600 mt-1 truncate">{quote.services}</h3>
                                </div>
                                <Link to={`/quoteDetails/${quote.id}`} className="absolute bottom-6 left-6">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
                                        View
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    )
}

export default ViewQuoteResquests