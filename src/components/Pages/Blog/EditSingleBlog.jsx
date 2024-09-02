import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db, doc, getDoc, updateDoc } from "../../../firebase/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Loader from "../../Items/Loader";

function EditSingleBlog() {
    const { postId } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [mainPhoto, setMainPhoto] = useState(null);
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [currentData, setCurrentData] = useState(null);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const docRef = doc(db, 'posts', postId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    const createdAt = data.createdAt?.toDate();
                    const storage = getStorage();

                    const profilePhotoUrl = data.profilePhoto ? await getDownloadURL(ref(storage, data.profilePhoto)) : null;
                    const mainPhotoUrl = data.mainPhoto ? await getDownloadURL(ref(storage, data.mainPhoto)) : null;

                    setCurrentData({
                        id: docSnap.id,
                        ...data,
                        createdAt,
                        profilePhoto: profilePhotoUrl,
                        mainPhoto: mainPhotoUrl,
                    });

                    setName(data.name || "");
                    setTopic(data.topic || "");
                    setDescription(data.description || "");
                    setMessage(data.message || "");
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.log("Error fetching document:", error);
            }
        };

        fetchBlogData();
    }, [postId]);

    const handleFileChange = (e, setFile) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file);
        }
    };

    const uploadImage = async (file) => {
        if (!file) return null;

        const storageRef = ref(getStorage(), `images/${file.name}`);
        try {
            await uploadBytes(storageRef, file);
            const url = await getDownloadURL(storageRef);
            return url;
        } catch (error) {
            console.error('Upload Error', error);
            return null;
        }
    };

    const updatePost = async (e) => {
        e.preventDefault();

        if (!name || !topic || !description || !message) {
            alert("Please fill out all fields.");
            return; // Prevent form submission if validation fails
        }

        try {
            // Upload photos if selected
            const mainPhotoUrl = mainPhoto ? await uploadImage(mainPhoto) : currentData.mainPhoto;
            const profilePhotoUrl = profilePhoto ? await uploadImage(profilePhoto) : currentData.profilePhoto;

            // Update the post in Firestore
            const docRef = doc(db, 'posts', postId);
            await updateDoc(docRef, {
                name,
                topic,
                description,
                message,
                mainPhoto: mainPhotoUrl,
                profilePhoto: profilePhotoUrl,
                updatedAt: new Date(),
            });

            // Clear form fields and error message
            setName("");
            setTopic("");
            setDescription("");
            setMessage("");
            setMainPhoto(null);
            setProfilePhoto(null);
            setError("");

            console.log(name, topic, description, message, postId);
            navigate('/');
        } catch (error) {
            console.log("Error : ", error);
        }
    };

    if (!currentData) {
        return <Loader />;
    }

    return (
        <div>
            <div className="h-auto z-1 bg-white text-black px-6 py-10 w-full flex flex-col gap-6">
                <div>
                    <form onSubmit={updatePost} className="InputDetails w-full grid grid-cols-1 gap-4">
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
                            <label htmlFor="MainPhoto" className="block text-lg font-medium text-gray-700 mb-2">Blog Photo</label>
                            <input
                                type="file"
                                id="mainphoto"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg file:border-none file:bg-blue-100 file:text-blue-700 file:py-2 file:px-4 file:rounded-lg file:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => handleFileChange(e, setMainPhoto)}
                            />
                            <span className='text-xs text-slate-600'>*update Blog Post photo</span>
                        </div>

                        <div className="">
                            <label htmlFor="profilePhoto" className="block text-lg font-medium text-gray-700 mb-2">Profile Photo</label>
                            <input
                                type="file"
                                id="profilephoto"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg file:border-none file:bg-blue-100 file:text-blue-700 file:py-2 file:px-4 file:rounded-lg file:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => handleFileChange(e, setProfilePhoto)}
                            />
                            <span className='text-xs text-slate-600'>*update Profile Photo</span>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 text-white font-semibold px-4 py-2 hover:text-slate-400 rounded-xl"
                        >
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditSingleBlog;
