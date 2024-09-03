import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Pages/UserAuthentication/AuthProvider.jsx';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.js';
import SignIn from "../Pages/UserAuthentication/SignIn.jsx"
import EditBlogs from '../Pages/Blog/EditBlogs.jsx';
import careerImage from "../../assets/admin/career.svg"
import blogImage from "../../assets/admin/blog.svg"
import applicantsImage from "../../assets/admin/applicants.svg"
import quoteImage from "../../assets/admin/quote.jpg"



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
    const editCareer = () => {
        navigateTo('/admincareereditallowance');
    };

    const postBlog = () => {
        navigateTo('/adminblogpostallowance');
    };
    const editBlog = () => {
        navigateTo('/admineditblogs')
    }

    const allapplicants = () => {
        navigateTo('/adminallapplicants');
    };

    const viewQuotes = () => {
        navigateTo('/adminviewquoterequests');
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
                            src={careerImage}
                            alt="Career"
                            className="object-cover w-full h-full"
                        />
                    </figure>
                    <div className="card-body text-start">
                        <h2 className="card-title text-xl text-purple-300 font-semibold">Careers</h2>
                        <p>Post Job And Block Job</p>
                        <div className='flex justify-end gap-4'>
                            <div className="card-actions justify-end">
                                <button onClick={editCareer} className="btn btn-sm  bg-red-700 bg-opacity-35 text-white py-2 hover:bg-red-800 px-4">Edit</button>
                            </div>
                            <div className="card-actions justify-end">
                                <button onClick={postCareer} className="btn btn-sm btn-primary py-2 px-4">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card z-0 bg-base-100 image-full md:w-96 w-80 h-40 shadow-xl">
                    <figure>
                        <img
                            src={blogImage}
                            alt="Blog"
                            className="object-cover w-full h-full"
                        />
                    </figure>
                    <div className="card-body text-start">
                        <h2 className="card-title text-xl text-purple-300 font-semibold">Blog</h2>
                        <p>Create,Edit or Delete Blog</p>
                        <div className='flex justify-end gap-4'>
                            <div className="card-actions justify-end">
                                <button onClick={editBlog} className="btn btn-sm  bg-red-700 bg-opacity-35 text-white py-2 hover:bg-red-800 px-4">Edit</button>
                            </div>
                            <div className="card-actions justify-end">
                                <button onClick={postBlog} className="btn btn-sm btn-primary py-2 px-4">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card z-0 bg-base-100 image-full md:w-96 w-80 h-40 shadow-xl">
                    <figure>
                        <img
                            src={applicantsImage}
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
                            src={quoteImage}
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
