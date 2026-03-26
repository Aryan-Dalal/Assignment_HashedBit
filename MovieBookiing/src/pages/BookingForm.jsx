import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.mobile) {
      alert("Please fill all fields");
      return;
    }

    navigate("/success", { state: form });
  };

  return (
    <div>
      <h2>Book Seat</h2>

      <input name="name" placeholder="Name" onChange={handleChange} /><br /><br />
      <input name="email" placeholder="Email" onChange={handleChange} /><br /><br />
      <input name="mobile" placeholder="Mobile" onChange={handleChange} /><br /><br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BookingForm;