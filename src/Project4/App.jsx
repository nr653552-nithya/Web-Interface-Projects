import "./App.css";
import HobbyCard from "./HobbyCard";

function App() {
  return (
    <div className="app">
      <h1>My Hobbies</h1>

      <div className="hobby-container">

        <HobbyCard
          image="https://images.unsplash.com/photo-1516979187457-637abb4f9353"
          hobbyName="Reading"
          description="I enjoy reading books during my free time."
        />

        <HobbyCard
          image="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5"
          hobbyName="Music"
          description="I love listening to music and exploring new songs."
        />

        <HobbyCard
          image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
          hobbyName="Fitness"
          description="I like doing simple exercises to stay active and healthy."
        />

      </div>
    </div>
  );
}

export default App;