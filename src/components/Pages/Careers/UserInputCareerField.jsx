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

    const navigate = useNavigate();

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
        try {
            // Upload resume and add applicant data to Firestore
            const resumeRef = ref(storage, `resume/${resume.name}`);
            await uploadBytes(resumeRef, resume);
            const resumeURL = await getDownloadURL(resumeRef);
            const applicantRef = collection(db, "applicants");
            await addDoc(applicantRef, {
                name, email, number, position, relocate, experience, resumeURL
            });

            // // Call Firebase function to send email
            // await fetch('https://us-central1-seawavebackend.cloudfunctions.net/sendApplicantNotification', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ name, email, number, position, relocate, experience, resumeURL }),
            // });

            alert('Application submitted successfully!');
            setName('');
            setEmail('');
            setNumber('');
            setPosition('');
            setRelocate('yes');
            setExperience('0-1');
            setResume(null);
            navigate('/');
        } catch (error) {
            console.log("Eroor : ", error);
            alert('An error occurred while submitting the application.');
        }

        console.log({
            name,
            email,
            number,
            position,
            relocate,
            experience,
            resume
        });
    };

    return (
        <div className="bg-gray-50 h-auto p-10 max-w-lg mx-auto shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Apply for a Job</h1>
                <div className="form-group">
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-black focus:ring-2 focus:ring-blue-500"
                        value={name}
                        onChange={handleChange}
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
                    />
                    <span className='text-xs text-slate-600'>*Enter resume name as your first name</span>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserInputCareerField;
