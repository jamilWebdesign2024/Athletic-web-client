import { useLocation } from 'react-router';
import { useEffect } from 'react';

const RouteTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    let title = 'Your Website Name'; // default title

    if (path === '/') {
      title = 'Home | Your Website Name';
    } else if (path === '/manageEvents') {
      title = 'Manage Events | ManageEvents';
    } else if (path.startsWith('/updateEvent')) {
      title = 'Update Event | UpdatedEventPage';
    } else if (path === '/create-event') {
      title = 'Create New Event | CreateEvent';
    } else if (path === '/login') {
      title = 'Login | Login';
    } else if (path === '/register') {
      title = 'Register | Register';
    } else if (path.startsWith('/events/')) {
      title = 'Event Details | EventPage';
    } 
    else if (path === '/myBookings') {
      title = 'Manage Events | MyBookings';
    } 
    // তোমার অন্য routes গুলো এখানে add করতে পারো

    document.title = title;
  }, [location]);

  return null; // কোনো UI দরকার নাই
};

export default RouteTitleUpdater;
