import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db, getDocs, collection } from '../../../firebase/firebase';
import Loader from '../../Items/Loader';
import SortBy from '../../Items/SortBy';
import { format } from 'date-fns';

function ViewQuoteRequests() {
    const navigate = useNavigate();
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigateTo = (path) => {
        window.scrollTo(0, 0);
        navigate(path);
    };

    const [sortOption, setSortOption] = useState('latest');
    const handleSortChange = (option) => {
        setSortOption(option);
    };

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                setLoading(true);
                const querySnapshot = await getDocs(collection(db, 'quotes'));
                const quoteList = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        ...data,
                        createdAt: data.createdAt?.toDate()
                    };
                });

                quoteList.sort((a, b) => {
                    if (sortOption === 'latest') {
                        return b.createdAt - a.createdAt;
                    } else {
                        return a.createdAt - b.createdAt;
                    }
                });

                setQuotes(quoteList);
            } catch (error) {
                console.error('Error fetching Quotes:', error);
                setError('Error fetching quotes. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchQuotes();
    }, [sortOption]);


    if (loading) return <Loader />;
    if (error) return <div className='text-center h-screen font-semibold text-2xl mt-80 text-red-500'>{error}</div>;

    return (
        <div className="flex flex-col bg-white h-auto px-6 py-12 md:px-12 mx-auto">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-pink-900">Requested Quotes</h1>
                <SortBy sortOption={sortOption} onSortChange={handleSortChange} />
            </div>
            {quotes.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                    {quotes.map((quote) => {
                        const serviceDisplay = quote.services ? quote.services.map(service => service.toUpperCase()).join(" - ") : "No Services Mentioned"

                        return (
                            <div
                                key={quote.id}
                                aria-label={`View ${quote.companyName}`}
                                className="relative flex flex-col p-6 border border-gray-300 rounded-lg shadow-lg bg-white hover:bg-pink-50 transition-transform transform hover:-translate-y-1"
                            >
                                <div className="flex-1 flex flex-col">
                                    <h2 className="text-2xl font-semibold text-gray-900">{quote.companyName}</h2>
                                    <h3 className="text-lg text-gray-600 mt-1 truncate">{serviceDisplay}</h3>
                                    <span className="mt-2 truncate w-full text-green-600 text-start">
                                        {quote.createdAt ? format(quote.createdAt, 'MMMM d, yyyy') : 'No date available'}
                                    </span>
                                </div>
                                <button
                                    onClick={() => navigateTo(`/quoteDetails/${quote.id}`)}
                                    className="mt-4 bg-pink-500 hover:bg-pink-700 text-white font-medium w-20 py-2 px-4 rounded-lg transition-colors duration-300"
                                >
                                    View
                                </button>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <div className="text-center text-gray-500">No <span className="text-red-600">quotes</span> available.</div>
            )}
        </div>
    );
}

export default ViewQuoteRequests;
