import { useNavigate } from "react-router-dom";

// IMPORT IMAGES
import avengers from "../assets/avengers.png";
import batman from "../assets/batman.png";
import spiderman from "../assets/spiderman.png";
import doomsday from "../assets/doomsday.png";
import dune from "../assets/dune.png";
import oppenheimer from "../assets/oppenheimer.png";
import interstellar from "../assets/interstellar.png";


function Home() {
  const navigate = useNavigate();

  const movies = [
    { id: 1, name: "Avengers : Infinity War", img: avengers },
    { id: 2, name: "Batman", img: batman },
    { id: 3, name: "Spiderman-Brand New Day", img: spiderman },
    { id: 4, name: "Avengers : Doomsday", img: doomsday },
    { id: 5, name: "Dune 2", img: dune },
    { id: 6, name: "Oppenheimer", img: oppenheimer },
    { id: 7, name: "Interstellar", img: interstellar },
  ];

  return (
    <div className="container">
      <h2>🎬 Movies</h2>

      <div className="grid">
        {movies.map((m) => (
          <div
            className="card"
            key={m.id}
            onClick={() => navigate(`/movie/${m.id}`, { state: m })}
          >
            <img src={m.img} alt={m.name} />
            <p>{m.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;