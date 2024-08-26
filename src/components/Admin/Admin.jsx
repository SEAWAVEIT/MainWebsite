import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Pages/UserAuthentication/AuthProvider.jsx';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.js';
import SignIn from "../Pages/UserAuthentication/SignIn.jsx"

function Admin() {
    const navigate = useNavigate();
    const { user, setUser } = useAuth();

    const navigateTo = (path) => {
        window.scrollTo(0, 0)
        navigate(path)
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                navigateTo("/signin");
            }
        });
        return () => unsubscribe();
    }, [navigate, setUser]);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (error) {
            console.error('Sign Out Error', error);
        }
    };

    if (!user) {
        return <SignIn />;
    }

    const postCareer = () => {
        navigateTo('/admincareerpostallowance');
    };

    const postBlog = () => {
        navigateTo('/adminblogpostallowance');
    };

    const allapplicants = () => {
        navigateTo('/allapplicants');
    };

    const viewQuotes = () => {
        navigateTo('/viewquoterequests');
    };

    return (
        <div className='bg-white p-8 z-1 py-20'>
            <div>
                <h1 className='text-5xl font-medium text-center mb-8'>Admin Dashboard</h1>
            </div>
            <div className='flex flex-wrap justify-center gap-8'>
                <div className="card z-0 bg-base-100 image-full md:w-96 w-80 h-40 shadow-xl">
                    <figure>
                        <img
                            src="https://img.freepik.com/free-vector/business-leader-standing-arrow-holding-flag-flat-vector-illustration-cartoon-people-training-doing-business-plan-leadership-victory-challenge-concept_74855-9812.jpg?ga=GA1.1.66059567.1723013766&semt=ais_hybrid"
                            alt="Career"
                            className="object-cover w-full h-full"
                        />
                    </figure>
                    <div className="card-body text-start">
                        <h2 className="card-title text-xl text-purple-300 font-semibold">Careers</h2>
                        <p>Post Requirement</p>
                        <div className="card-actions justify-end">
                            <button onClick={postCareer} className="btn btn-sm btn-primary py-2 px-4">Add</button>
                        </div>
                    </div>
                </div>
                <div className="card z-0 bg-base-100 image-full md:w-96 w-80 h-40 shadow-xl">
                    <figure>
                        <img
                            src="https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?ga=GA1.1.66059567.1723013766&semt=ais_hybrid"
                            alt="Blog"
                            className="object-cover w-full h-full"
                        />
                    </figure>
                    <div className="card-body text-start">
                        <h2 className="card-title text-xl text-purple-300 font-semibold">Blog</h2>
                        <p>Create Blog</p>
                        <div className="card-actions justify-end">
                            <button onClick={postBlog} className="btn btn-sm btn-primary py-2 px-4">Add</button>
                        </div>
                    </div>
                </div>
                <div className="card z-0 bg-base-100 image-full md:w-96 w-80 h-40 shadow-xl">
                    <figure>
                        <img
                            src="https://img.freepik.com/free-vector/recruitment-agency-searching-job-applicants_1262-19873.jpg?ga=GA1.1.66059567.1723013766&semt=ais_hybrid"
                            alt="Applicants"
                            className="object-cover w-full h-full"
                        />
                    </figure>
                    <div className="card-body text-start">
                        <h2 className="card-title text-xl text-purple-300 font-semibold">Applicants</h2>
                        <p>View All Applied Applicants</p>
                        <div className="card-actions justify-end">
                            <button onClick={allapplicants} className="btn btn-sm btn-primary py-2 px-4">View</button>
                        </div>
                    </div>
                </div>
                <div className="card z-0 bg-base-100 image-full md:w-96 w-80 h-40 shadow-xl">
                    <figure>
                        <img
                            src="https://img.freepik.com/free-vector/emails-concept-illustration_114360-27614.jpg?ga=GA1.1.729970344.1723197854&semt=ais_hybrid"
                            alt="Quote"
                            className="object-cover w-full h-full"
                        />
                    </figure>
                    <div className="card-body text-start">
                        <h2 className="card-title text-xl text-purple-300 font-semibold">Quote Request</h2>
                        <p>View Quotes</p>
                        <div className="card-actions justify-end">
                            <button onClick={viewQuotes} className="btn btn-sm btn-primary py-2 px-4">View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
