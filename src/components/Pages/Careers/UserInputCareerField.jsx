import React, { useState } from 'react';
import { db, collection, addDoc, storage } from '../../../firebase/firebase.js';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

function UserInputCareerField() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [position, setPosition] = useState('');
    const [relocate, setRelocate] = useState('yes');
    const [experience, setExperience] = useState('0-1');
    const [resume, setResume] = useState(null);
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();
    
    const navigateTo = (path) => {
        window.scrollTo(0, 0);
        navigate(path);
    };

    const handleChange = (e) => {
        const { id, value, type, files } = e.target;
        if (type === 'file') {
            setResume(files[0]);
        } else if (type === 'radio') {
            if (id.startsWith('relocate')) setRelocate(value);
            if (id.startsWith('experience')) setExperience(value);
        } else {
            switch (id) {
                case 'name':
                    setName(value);
                    break;
                case 'email':
                    setEmail(value);
                    break;
                case 'number':
                    setNumber(value);
                    break;
                case 'position':
                    setPosition(value);
                    break;
                default:
                    break;
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !number || !position || !resume) {
            alert('Please fill in all fields and upload your resume.');
            return;
        }

        setLoading(true); // Start loading

        try {
            const resumeRef = ref(storage, `resume/${resume.name}`);
            await uploadBytes(resumeRef, resume);
            const resumeURL = await getDownloadURL(resumeRef);
            const applicantRef = collection(db, "applicants");
            await addDoc(applicantRef, {
                name, email, number, position, relocate, experience, resumeURL, createdAt: new Date(),
            });

            alert('Application submitted successfully!');
            setName('');
            setEmail('');
            setNumber('');
            setPosition('');
            setRelocate('yes');
            setExperience('0-1');
            setResume(null);
            navigateTo('/');
        } catch (error) {
            console.log("Error: ", error);
            alert('An error occurred while submitting the application.');
        } finally {
            setLoading(false); // Stop loading
        }
    };
    return (
        <div className="bg-white h-auto mx-auto flex justify-center items-center ">
            <form onSubmit={handleSubmit} className="md:w-1/2  bg-gray-50 p-10   shadow-lg space-y-6">
                <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Apply for a Job</h1>
                <div className="form-group">
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-black focus:ring-2 focus:ring-blue-500"
                        value={name}
                        onChange={handleChange}
                        disabled={loading} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-black focus:ring-2 focus:ring-blue-500"
                        value={email}
                        onChange={handleChange}
                        disabled={loading} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="number" className="block text-lg font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                        type="tel"
                        id="number"
                        placeholder="Enter your phone number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-black focus:ring-2 focus:ring-blue-500"
                        value={number}
                        onChange={handleChange}
                        disabled={loading} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="position" className="block text-lg font-medium text-gray-700 mb-2">Current Position</label>
                    <input
                        type="text"
                        id="position"
                        placeholder="Enter your current position"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-black focus:ring-2 focus:ring-blue-500"
                        value={position}
                        onChange={handleChange}
                        disabled={loading} 
                    />
                </div>

                <div className="form-group">
                    <label className="block text-lg font-medium text-gray-700 mb-2">Willing to Relocate?</label>
                    <div className="flex space-x-6">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                id="relocate-yes"
                                name="relocate"
                                value="yes"
                                checked={relocate === 'yes'}
                                onChange={handleChange}
                                disabled={loading} 
                                className="mr-2"
                            />
                            <span>Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                id="relocate-no"
                                name="relocate"
                                value="no"
                                checked={relocate === 'no'}
                                onChange={handleChange}
                                disabled={loading} 
                                className="mr-2"
                            />
                            <span>No</span>
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label className="block text-lg font-medium text-gray-700 mb-2">Years of Experience</label>
                    <div className="flex space-x-6">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                id="experience-0-1"
                                name="experience"
                                value="0-1"
                                checked={experience === '0-1'}
                                onChange={handleChange}
                                disabled={loading} 
                                className="mr-2 bg-white"
                            />
                            <span>0-1 years</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                id="experience-2-5"
                                name="experience"
                                value="2-5"
                                checked={experience === '2-5'}
                                onChange={handleChange}
                                disabled={loading} 
                                className="mr-2"
                            />
                            <span>2-5 years</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                id="experience-6plus"
                                name="experience"
                                value="6+"
                                checked={experience === '6+'}
                                onChange={handleChange}
                                disabled={loading} 
                                className="mr-2"
                            />
                            <span>6+ years</span>
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="resume" className="block text-lg font-medium text-gray-700 mb-2">Resume</label>
                    <input
                        type="file"
                        id="resume"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg file:border-none file:bg-blue-100 file:text-blue-700 file:py-2 file:px-4 file:rounded-lg file:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                        disabled={loading} 
                    />
                    <span className='text-xs text-slate-600'>*Enter resume name as your first name</span>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn md:btn-md btn-sm btn-info md:w-40 w-28 h-8 md:h-10 text-sm text-white md:text-md"
>{loading ? (
                        <span className="loader"></span> // Show loader if submitting
                    ) : (
                        "Submit"
                    )}
                    </button>
                </div>
            </form>
            <style jsx>{`
				.loader {
					border: 4px solid rgba(0, 0, 0, 0.1);
					border-left: 4px solid #00bcd4;
					border-radius: 50%;
					width: 24px;
					height: 24px;
					animation: spin 1s linear infinite;
				}

				@keyframes spin {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}
			`}</style>
        </div>
    );
}

export default UserInputCareerField;
