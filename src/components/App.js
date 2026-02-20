import user from "../data/user";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <main>
      <nav></nav>

      <Home
        name={user.name}
        city={user.city}
        color={user.color}
      />

      <About
        bio={user.bio}
        github={user.links.github}
        linkedin={user.links.linkedin}
      />
    </main>
  );
}

export default App;