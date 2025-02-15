import { useState } from "react";

const TalkWithExpert = () => {

    const [showModal, setShowModal] = useState(false)
    const handleExpertClick = () => {
        const now = new Date()
        const hours = now.getHours()
        if (hours >= 10 && hours < 20) {
            window.open("https://meet.google.com/new", "_blank");
        }
        else {
            setShowModal(true)
        }
    }
    return (
        <div>
            {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Expert Consultation Hours</h2>
            <p>Our experts are available from 10:00 AM to 8:00 PM.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
        </div>
    );
};

export default TalkWithExpert;