import React from 'react';

function ServiceItem({ text }) {
    return (
        <div className="flex items-start gap-2 p-1 hover-effect">
            <svg className="icon flex-shrink-0" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" />
            </svg>
            <div className="flex-grow">
                <p className="text-sm md:text-base whitespace-normal text-slate-900">{text}</p>
            </div>
        </div>
    );
}

export default ServiceItem;
