import React from 'react'

function Modal() {
    return (
        <div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Login</h3>
                    <form method="dialog">
                        <div className="py-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            <input type="text" id="username" name="username" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className="py-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className="modal-action">
                            <button type="submit" className="btn">Login</button>
                            <button type="button" className="btn" onClick={() => document.getElementById('my_modal_5').close()}>Close</button>
                        </div>
                    </form>
                </div>
            </dialog>

        </div>
    )
}

export default Modal