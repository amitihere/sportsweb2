import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';

const BookingSystem = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHours, setSelectedHours] = useState([]);
  const [showSportsModal, setShowSportsModal] = useState(false);
  const [selectedSport, setSelectedSport] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Generate time slots from 00:00 to 23:00
  const timeSlots = Array.from({ length: 24 }, (_, i) => 
    `${i.toString().padStart(2, '0')}:00`
  );

  const calculateTotal = () => {
    const rate = selectedSport === 'badminton' ? 480 : 380;
    return selectedHours.length * rate;
  };

  const handleHourSelect = (hour) => {
    setSelectedHours(prev => 
      prev.includes(hour) 
        ? prev.filter(h => h !== hour) 
        : [...prev, hour]
    );
  };

  return (
    <div className="min-h-screen p-8 bg-white">
      {/* Date Selection */}
      <div className="mb-8 p-4 bg-green-50 rounded-lg">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Select Date (Next 60 Days)
        </h2>
        <DatePicker
          selected={selectedDate}
          onChange={date => {
            setSelectedDate(date);
            setSelectedHours([]);
          }}
          minDate={new Date()}
          maxDate={new Date(Date.now() + 60 * 24 * 60 * 60 * 1000)}
          inline
        />
      </div>

      {/* Time Slot Selection */}
      {selectedDate && (
        <div className="mb-8 p-4 bg-green-50 rounded-lg">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Select Time Slots
          </h2>
          <div className="grid grid-cols-4 gap-2">
            {timeSlots.map(hour => (
              <button
                key={hour}
                onClick={() => handleHourSelect(hour)}
                className={`p-2 rounded ${
                  selectedHours.includes(hour)
                    ? 'bg-green-600 text-white'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {hour}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Sport Selection Modal */}
      <Modal
        isOpen={showSportsModal}
        className="bg-white p-6 rounded-lg max-w-md mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <h3 className="text-xl font-bold text-green-700 mb-4">
          Select Sport
        </h3>
        <div className="space-y-4">
          <button
            onClick={() => setSelectedSport('badminton')}
            className="w-full p-3 bg-green-100 rounded hover:bg-green-200"
          >
            Badminton (₹480/hour)
          </button>
          <button
            onClick={() => setSelectedSport('tabletennis')}
            className="w-full p-3 bg-green-100 rounded hover:bg-green-200"
          >
            Table Tennis (₹380/hour)
          </button>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setShowSportsModal(false)}
            className="px-4 py-2 text-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (selectedSport) {
                setShowSportsModal(false);
                setShowConfirmation(true);
              }
            }}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Book Now
          </button>
        </div>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        isOpen={showConfirmation}
        className="bg-white p-6 rounded-lg max-w-md mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <h3 className="text-xl font-bold text-green-700 mb-4">
          Booking Confirmed!
        </h3>
        <p className="mb-2">Date: {selectedDate?.toDateString()}</p>
        <p className="mb-2">Hours: {selectedHours.join(', ')}</p>
        <p className="mb-2">Sport: {selectedSport}</p>
        <p className="font-bold">Total: ₹{calculateTotal()}</p>
        <button
          onClick={() => setShowConfirmation(false)}
          className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded"
        >
          Close
        </button>
      </Modal>

      {/* Action Button */}
      {selectedDate && selectedHours.length > 0 && (
        <div className="text-center">
          <button
            onClick={() => setShowSportsModal(true)}
            className="px-8 py-3 bg-green-600 text-white rounded-lg text-lg hover:bg-green-700"
          >
            Choose Sport
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingSystem;
