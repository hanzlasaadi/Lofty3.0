import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { GiCrossedBones } from 'react-icons/gi';

const PopupAlert = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        setShowPopup(false);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 1000);

        document.addEventListener('click', handleClick);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('click', handleClick);
        };
    }, []);

    if (!showPopup) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="popup-container">
            <div className="popup-background"></div>
            <div className="popup-rizwan">
                <div className="box">
                    <h3 className='heading-rizwan'>Welcome to back loftyrooms</h3>
                    <p>"LoftyRooms is a place where dreams, success, and relaxation come together to form the foundation of a new way of life. Our website offers you a delightful selection of uniquely beautiful rooms that meet your expectations. We provide a host of hospitality and a wealth of opportunities for your comfort. With LoftyRooms, you will cherish the goodness and grandeur in every moment because every second here celebrates your love. Stay with LoftyRooms, and your loved ones will remember it with affection and admiration, for every moment counts."</p>
                    <div className='crose-icon'>
                        <GiCrossedBones />
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default PopupAlert;
