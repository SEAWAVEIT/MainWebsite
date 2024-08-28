import React, { useEffect, useState } from 'react';
import { db, collection, addDoc, auth, storage } from "../../../firebase/firebase";
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuth } from "../UserAuthentication/AuthProvider";
import SignIn from '../UserAuthentication/SignIn';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function AdminBlogPostAllowance() {
    const [name, setName] = useState("");
    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [mainPhoto, setMainPhoto] = useState(null);
    const [profilePhoto, setProfilePhoto] = useState(null);

    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        if (!user) {
            navigate("/signin");
        }
    }, [user, navigate]);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (error) {
            console.error('Sign Out Error', error);
        }
    };

    const handleFileChange = (e, setFile) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file);
        }
    };

    const uploadImage = async (file) => {
        if (!file) return null;

        const storageRef = ref(storage, `images/${file.name}`);
        try {
            await uploadBytes(storageRef, file);
            const url = await getDownloadURL(storageRef);
            return url;
        } catch (error) {
            console.error('Upload Error', error);
            return null;
        }
    };

    const addPost = async (e) => {
        e.preventDefault();

        if (!name || !topic || !description || !message || !mainPhoto || !profilePhoto) {
            alert("Please fill out all fields.");
            return; // Prevent form submission if validation fails
        }

        try {
            // Upload photos and get their URLs
            const mainPhotoUrl = await uploadImage(mainPhoto);
            const profilePhotoUrl = await uploadImage(profilePhoto);

            // Add the post to Firestore
            const docRef = await addDoc(collection(db, 'posts'), {
                name,
                topic,
                description,
                message,
                mainPhoto: mainPhotoUrl,
                profilePhoto: profilePhotoUrl,
                createdAt: new Date(),
            });

            // Clear form fields and error message
            setName("");
            setTopic("");
            setDescription("");
            setMessage("");
            setMainPhoto(null);
            setProfilePhoto(null);
            setError("");

            console.log(name, topic, description, message, docRef.id);
            navigate('/');
        } catch (error) {
            console.log("Error : ", error);
        }
    };

    if (!user) {
        return <SignIn />;
    }

    return (
        <div>
            <div className="h-auto z-1 bg-white text-black px-6 py-10 w-full flex flex-col gap-6">
                <div className="relative adminbg rounded-xl overflow-hidden mb-6 md:mb-8">
                    <div>
                        {/* Placeholder for an image */}
                    </div>

                    <div className="relative flex justify-center items-center h-60 md:h-96">
                        <div className="container">
                            <div className="box">
                                {/* Animated text */}
                                {Array.from({ length: 16 }, (_, i) => (
                                    <span key={i} style={{ "--i": i + 1 }}>
                                        <i>EXPLORE</i>
                                        YOUR
                                        <i>THOUGHTS</i>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <form onSubmit={addPost} className="InputDetails w-full grid grid-cols-1 gap-4">
                        {error && (
                            <p className="text-red-500 text-center mb-4">{error}</p>
                        )}
                        <div className="w-full">
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Name"
                                className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
                            />
                        </div>
                        <div className="w-full">
                            <input
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                type="text"
                                placeholder="Topic"
                                className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
                            />
                        </div>
                        <div className="w-full">
                            <input
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                type="text"
                                placeholder="Description"
                                className="w-full mt-2 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
                            />
                        </div>

                        <div className="my-4">
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                name="Message"
                                id="Message"
                                placeholder="Message"
                                className="w-full h-40 py-2 px-4 rounded-lg bg-white border border-gray-400 border-opacity-40 text-gray-800 font-semibold focus:border-cyan-500 focus:outline-none"
                            ></textarea>
                        </div>

                        <div className="">
                            <label htmlFor="MainPhoto" className="block text-lg font-medium text-gray-700 mb-2">Main Photo</label>
                            <input
                                type="file"
                                id="mainphoto"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg file:border-none file:bg-blue-100 file:text-blue-700 file:py-2 file:px-4 file:rounded-lg file:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => handleFileChange(e, setMainPhoto)}
                            />
                            <span className='text-xs text-slate-600'>*add Main photo</span>
                        </div>

                        <div className="">
                            <label htmlFor="profilePhoto" className="block text-lg font-medium text-gray-700 mb-2">Profile Photo</label>
                            <input
                                type="file"
                                id="profilephoto"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg file:border-none file:bg-blue-100 file:text-blue-700 file:py-2 file:px-4 file:rounded-lg file:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => handleFileChange(e, setProfilePhoto)}
                            />
                            <span className='text-xs text-slate-600'>*add Profile Photo</span>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 text-white font-semibold px-4 py-2 hover:text-slate-400 rounded-xl"
                        >
                            Post
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminBlogPostAllowance;
