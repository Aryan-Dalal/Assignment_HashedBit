import { useLocation } from "react-router-dom";

function Success() {
  const { state } = useLocation();

  const bookingId = Math.floor(Math.random() * 100000);

  return (
    <div>
      <h2>Booking Confirmed</h2>

      <p>Booking ID: {bookingId}</p>
      <p>Name: {state?.name}</p>
      <p>Email: {state?.email}</p>
      <p>Mobile: {state?.mobile}</p>
    </div>
  );
}

export default Success;