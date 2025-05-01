export const getDates = (days) => {
    const dates = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    for (let i = 0; i < days; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
  
    return dates;
  };
  
  export const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}`;
  };
  
  export const getTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 5; hour <= 23; hour++) {
      timeSlots.push(`${hour}:00`);
    }
    return timeSlots;
  };
  
  export const formatTime = (timeString) => {
    const [hourStr] = timeString.split(':');
    const hour = parseInt(hourStr, 10);
    
    if (hour === 0) {
      return '12 AM';
    } else if (hour === 12) {
      return '12 PM';
    } else if (hour < 12) {
      return `${hour} AM`;
    } else {
      return `${hour - 12} PM`;
    }
  };