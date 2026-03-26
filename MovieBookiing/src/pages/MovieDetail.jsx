import { useNavigate, useParams } from "react-router-dom";

function MovieDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div>
      <h2>Movie Details</h2>
      <p>Movie ID: {id}</p>

      <button onClick={() => navigate("/book")}>
        Book Seat
      </button>
    </div>
  );
}

export default MovieDetail;