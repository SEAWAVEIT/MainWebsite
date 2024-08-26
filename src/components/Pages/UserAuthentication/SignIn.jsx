import React, { useState } from 'react';
import { auth, googleProvider } from '../../../firebase/firebase.js';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate()
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log('User signed in:', user);
            navigate("/admin");
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
        <div className='bg-white flex justify-center gap-4 h-[90vh] my-20 items-center flex-col'>
            <h2 className='text-6xl font-medium text-blue-400'>Sign In</h2>

            <div className='flex gap-2'>
                {/* <button onClick={handleGoogleSignIn} className="bg-blue-500 text-white p-2 rounded">
                    Sign In with Google
                </button> */}


                <button
                    onClick={handleGoogleSignIn}
                    className="btn glass bg-blue-500 hover:bg-blue-800 text-white whitespace-nowrap w-32 text-lg">Sign In</button>
                <button
                    onClick={handleGoogleSignOut}
                    className="btn glass bg-red-500 hover:bg-red-800 text-white whitespace-nowrap  w-32 text-lg">Sign Out</button>


                {/* <button onClick={handleGoogleSignOut} className="bg-red-500 text-white p-2 rounded">
                    Sign Out
                </button> */}
            </div>
        </div>
    );
}

export default SignIn;





// default allowance
// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// // SignIn.jsx
// import React from 'react';
// import { auth, signInAnonymously, signOut } from '../../firebase/firebase.js'; // Ensure correct imports

// function SignIn() {
//     const handleAnonymousSignIn = async () => {
//         try {
//             const result = await signInAnonymously(auth);
//             const user = result.user;
//             console.log('User signed in anonymously:', user);
//             // Handle user info or redirect
//         } catch (error) {
//             console.error('Error signing in anonymously:', error.message);
//             // Handle the error
//         }
//     };

//     const handleSignOut = async () => {
//         try {
//             await signOut(auth);
//             console.log('User signed out');
//             // Handle post-sign-out behavior, such as redirecting to a different page
//         } catch (error) {
//             console.error('Error signing out:', error.message);
//             // Optionally display an error message to the user
//         }
//     };

//     return (
//         <div className='bg-white flex justify-center gap-4 h-11/12 my-20 items-center flex-col'>
//             <h2 className='text-5xl font-medium text-blue-400'>Sign In</h2>
//             {/* Other elements like form for email/password sign-in can go here */}

//             <div className='flex gap-2'>
//                 <button onClick={handleAnonymousSignIn} className="bg-blue-500 text-white p-2 rounded">
//                     Sign In Anonymously
//                 </button>
//                 <button onClick={handleSignOut} className="bg-red-500 text-white p-2 rounded">
//                     Sign Out
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default SignIn;
