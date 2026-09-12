// Using localStorage instead of Firestore for demo

export const saveBooking = async (bookingData) => {
  try {
    // Simulate database save for demo
    const mockId = 'BK' + Date.now();
    const booking = {
      id: mockId,
      ...bookingData,
      createdAt: new Date().toISOString(),
      status: 'confirmed'
    };
    
    // Save to localStorage as fallback
    const existingBookings = JSON.parse(localStorage.getItem('userBookings') || '[]');
    existingBookings.push(booking);
    localStorage.setItem('userBookings', JSON.stringify(existingBookings));
    
    return mockId;
  } catch (error) {
    console.error('Error saving booking:', error);
    throw error;
  }
};

export const getUserBookings = async (userId) => {
  try {
    // Get from localStorage as fallback
    const allBookings = JSON.parse(localStorage.getItem('userBookings') || '[]');
    return allBookings.filter(booking => booking.userId === userId);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return [];
  }
};

export const cancelBooking = async (bookingId) => {
  try {
    const existingBookings = JSON.parse(localStorage.getItem('userBookings') || '[]');
    const updatedBookings = existingBookings.map(b => {
      if (b.id === bookingId) {
        return { ...b, status: 'Cancelled (Refund Processed)' };
      }
      return b;
    });
    localStorage.setItem('userBookings', JSON.stringify(updatedBookings));
    return true;
  } catch (error) {
    console.error('Error cancelling booking:', error);
    return false;
  }
};