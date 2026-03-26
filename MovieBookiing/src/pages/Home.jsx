import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const movies = [
    { id: 1, name: "Avengers" },
    { id: 2, name: "Batman" },
    { id: 3, name: "Spiderman" },
    { id: 4, name: "KGF" },
    { id: 5, name: "Pushpa" },
    { id: 6, name: "Jawan" },
    { id: 7, name: "Pathaan" },
    { id: 8, name: "RRR" },
    { id: 9, name: "Inception" },
    { id: 10, name: "Titanic" },
    { id: 11, name: "Interstellar" },
    { id: 12, name: "Dangal" },
    { id: 13, name: "War" },
    { id: 14, name: "Krrish" },
    { id: 15, name: "Don" },
    { id: 16, name: "Raees" },
  ];

  return (
    <div className="container">
      <h2>Movies</h2>

      <div className="grid">
        {movies.map((m) => (
          <div className="card" key={m.id} onClick={() => navigate(`/movie/${m.id}`)}>
            
            {/* Random image */}
            <img
              src={`https://source.unsplash.com/300x200/?movie,cinema&sig=${m.id}`}
              alt="movie"
            />

            <p>{m.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;