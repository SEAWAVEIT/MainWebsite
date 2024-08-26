import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db, getDoc, doc } from "../../../firebase/firebase";
import Loader from "../../Items/Loader"
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

                    console.log('CreatedAt:', createdAt);

                    setPost({
                        id: docSnap.id,
                        ...data,
                        createdAt
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
        <div className="bg-white h-auto pt-8 py-8 px-12 ">
            <div className='SingleBlog rounded-xl'>
                <div className='BlogTopic md:text-5xl text-2xl font-semibold mb-4 text-center'>
                    <h1>{post.topic}</h1>
                </div>
                <div className='BlogAuthor text-center mb-8 border-y-2 border-spacing-6 py-2 my-1'>
                    <h1 className='inline text-blue-700 font-semibold mr-6'>{post.name}</h1>
                    <span className='text-slate-700 font-normal text-lg'>
                        {post.createdAt
                            ? format(post.createdAt, 'MMMM d, yyyy') // Format date
                            : 'No date available'}
                    </span>
                </div>
                <div className='BlogDescription mb-4 md:text-lg text-sm text-slate-800 font-serif' >{post.description}</div>
                <div className='BlogMessage md:text-lg text-sm text-slate-800 font-serif'>{post.message}</div>
            </div>
        </div>
    );
}

export default SingleBlog;
