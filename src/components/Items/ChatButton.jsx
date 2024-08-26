import React from 'react';

function ChatButton() {
    const openChat = () => {
        const phoneNumber = '918655642421'; // Your number
        const customText = encodeURIComponent('Hello! I am interested in learning more about your services.');
        const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${customText}&type=phone_number&app_absent=0`;
        window.open(url, '_blank');
    };

    return (
        <button className="chat-button" onClick={openChat}>
            <p>Chat With Us</p>
            <p className='text-2xl'>💬</p>
        </button>
    );
}

export default ChatButton;
