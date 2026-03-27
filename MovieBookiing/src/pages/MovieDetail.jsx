import { useNavigate, useLocation } from "react-router-dom";

function MovieDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) return <h2>No Movie Selected</h2>;

  return (
    <div className="detail">
      <h2>{state.name}</h2>

      <img src={state.img} alt={state.name} />

      <p>
        This is a blockbuster movie. Book your tickets now and enjoy the show!
      </p>

      <button onClick={() => navigate("/book")}>
        Book Seat
      </button>
    </div>
  );
}

export default MovieDetail;