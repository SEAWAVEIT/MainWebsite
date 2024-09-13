import React, { useState } from 'react';
import { auth, googleProvider } from '../../../firebase/firebase.js';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const ALLOWED_EMAIL = 'eamd.seawave@gmail.com';

function SignIn() {
    const navigate = useNavigate()
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log('User signed in:', user);
            if (user.email === ALLOWED_EMAIL) {
                navigate("/admin");
            } else {
                // Sign out the user and show an error message if the email is not allowed
                await signOut(auth);
                alert('This email is not authorized to sign in.');
            }
        } catch (error) {
            if (error.code === 'auth/popup-closed-by-user') {
                console.error('Sign-in popup was closed before completion.');
                alert('Sign-in process was interrupted. Please try again.');
            }
            else {
                console.error('Error signing in with Google:', error.message);
            }
        }
    };

    const handleGoogleSignOut = async () => {
        try {
            await signOut(auth);
            console.log('User signed out');
            navigate("/");
        } catch (error) {
            console.error('Error signing out:', error.message);
        }
    };

    return (
        <div className='bg-white flex justify-center gap-4 h-[90vh]  items-center flex-col'>
            <h2 className='text-6xl font-medium text-blue-400'>Sign In</h2>

            <div className='flex gap-2'>
                <button
                    onClick={handleGoogleSignIn}
                    className="btn glass bg-blue-500 hover:bg-blue-800 text-white whitespace-nowrap w-32 text-lg">Sign In
                </button>
                <button
                    onClick={handleGoogleSignOut}
                    className="btn glass bg-red-500 hover:bg-red-800 text-white whitespace-nowrap  w-32 text-lg">Sign Out
                </button>

            </div>
        </div>
    );
}

export default SignIn;


