import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { db, getDocs, collection } from "../../../firebase/firebase";
import Loader from "../../Items/Loader";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { format } from 'date-fns';
import SortBy from '../../Items/SortBy';

function AllBlogs() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortOption, setSortOption] = useState('latest');

    const navigateTo = (path) => {
        window.scrollTo(0, 0);
        navigate(path);
    };

    const handleSortChange = (option) => {
        setSortOption(option);
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const querySnapshot = await getDocs(collection(db, 'posts'));
                const postsList = await Promise.all(querySnapshot.docs.map(async doc => {
                    const data = doc.data();
                    const storage = getStorage();
                    const profilePhotoUrl = data.profilePhoto ? await getDownloadURL(ref(storage, data.profilePhoto)) : null;
                    return {
                        id: doc.id,
                        ...data,
                        createdAt: data.createdAt?.toDate(),
                        profilePhoto: profilePhotoUrl
                    };
                }));

                postsList.sort((a, b) => {
                    if (sortOption === 'latest') {
                        return b.createdAt - a.createdAt;
                    } else {
                        return a.createdAt - b.createdAt;
                    }
                });
                setPosts(postsList);
            } catch (error) {
                setError('Error fetching posts. Please try again later.');
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, [sortOption]);

    if (loading) return <Loader />;
    if (error) return <div className='text-center text-red-500'>{error}</div>;

    return (
        <div className="flex flex-col h-screen bg-white py-16 px-6 md:px-12 mx-auto max-w-7xl">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Published Blogs</h1>
                <SortBy sortOption={sortOption} onSortChange={handleSortChange} />
            </div>
            {posts.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <div
                            aria-label={`View ${post.name}`}
                            onClick={() => navigateTo(`/blog/${post.id}`)}
                            key={post.id}
                            className="relative flex flex-col p-4 border border-gray-300 rounded-lg shadow-lg bg-white hover:bg-gray-100 transition duration-200 ease-in-out cursor-pointer"
                        >
                            <div className="flex items-start mb-4">
                                {post.profilePhoto && (
                                    <img
                                        src={post.profilePhoto}
                                        alt="Profile"
                                        className="w-16 h-16 rounded-full object-cover mr-4"
                                    />
                                )}
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.topic}</h2>
                                    <h3 className="text-lg text-gray-600 ">{post.name}</h3>
                                    <span className="text-gray-500 text-sm">
                                        {post.createdAt ? format(post.createdAt, 'MMMM d, yyyy') : 'No date available'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-500">No posts available.</div>
            )}
        </div>
    );
}

export default AllBlogs;