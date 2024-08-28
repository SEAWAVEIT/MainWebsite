import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db, getDoc, doc } from "../../../firebase/firebase";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import Loader from "../../Items/Loader";
import { format } from 'date-fns';

function SingleBlog() {
    const [post, setPost] = useState(null);
    const { postId } = useParams();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const docRef = doc(db, 'posts', postId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    const createdAt = data.createdAt?.toDate();
                    const storage = getStorage();

                    const profilePhotoUrl = data.profilePhoto ? await getDownloadURL(ref(storage, data.profilePhoto)) : null;
                    const mainPhotoUrl = data.mainPhoto ? await getDownloadURL(ref(storage, data.mainPhoto)) : null;

                    setPost({
                        id: docSnap.id,
                        ...data,
                        createdAt,
                        profilePhoto: profilePhotoUrl,
                        mainPhoto: mainPhotoUrl,
                    });
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.log("Error fetching document:", error);
            }
        };

        fetchBlog();
    }, [postId]);

    if (!post) {
        return <Loader />;
    }

    return (
        <div className="bg-gray-100 py-12 px-6 md:px-12">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                {post.mainPhoto && (
                    <div className="relative">
                        <img
                            src={post.mainPhoto}
                            alt="Main"
                            className="w-full h-60 object-cover"
                        />
                    </div>
                )}
                <div className="p-6">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">{post.topic}</h1>
                    </div>
                    <div className="flex items-center justify-center mb-6 border-b border-gray-200 pb-4">
                        {post.profilePhoto && (
                            <img
                                src={post.profilePhoto}
                                alt="Profile"
                                className="w-16 h-16 rounded-full object-cover mr-4"
                            />
                        )}
                        <div className="text-center">
                            <p className="text-xl font-semibold text-blue-700">{post.name}</p>
                            <p className="text-gray-600 text-sm">
                                {post.createdAt ? format(post.createdAt, 'MMMM d, yyyy') : 'No date available'}
                            </p>
                        </div>
                    </div>
                    <div className="text-gray-800 mb-6">
                        <p className="text-lg font-light mb-4">{post.description}</p>
                        <p className="text-lg font-light">{post.message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleBlog;
