import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function App() {
  const musicList = [
    { file: "/bombardino.mp3", text: "Bombardino Crocodilo" },
    { file: "/lavachicken.mp3", text: "La-La-La Lava Ch-Ch-Ch Chicken" },
    { file: "/steve.mp3", text: "I AM STEVE" },
    { file: "/trala.mp3", text: "Tralalelo Tralala" }
  ];

  const [effects, setEffects] = useState<{ id: number; text: string; position: { top: string; left: string } }[]>([]);

  const playMusic = () => {
    const randomIndex = Math.floor(Math.random() * musicList.length);
    const selected = musicList[randomIndex];

    const audio = new Audio(selected.file);
    audio.play();

    const top = Math.floor(Math.random() * 70 + 10) + "%";
    const left = Math.floor(Math.random() * 70 + 10) + "%";

    const id = Date.now() + Math.random();

    const newEffect = {
      id,
      text: selected.text,
      position: { top, left }
    };

    setEffects((prev) => [...prev, newEffect]);

    setTimeout(() => {
      setEffects((prev) => prev.filter((effect) => effect.id !== id));
    }, 10000);
  };

  return (
    <>
      <div className="h-screen w-screen bg-blue-950 bg-[url('/arrows.svg')] bg-no-repeat bg-center bg-contain sm:bg-cover relative overflow-hidden">
        <div className="flex flex-col items-center justify-center h-full px-4">
          <h1 className="text-white text-3xl sm:text-4xl font-asap text-center p-4">Sigma boi</h1>
          <button
            className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-6 rounded-xl font-asap tracking-wide mt-4"
            onClick={playMusic}
          >
            <h1>Kattints rám</h1>
          </button>
        </div>

        {effects.map((effect) => (
          <div
            key={effect.id}
            className="absolute text-white text-5xl font-bold flex flex-col items-center animate-fade pointer-events-none"
            style={{ top: effect.position.top, left: effect.position.left }}
          >
            <p className="mt-2 ">{effect.text}</p>
          </div>
        ))}
      <footer className="absolute bottom-0 left-0 w-full text-white text-center p-4 font-asap">
        <h1>Ez az oldal egy nagy faszság egyébként</h1>
        <button className="text-4xl ">
          <a href="https://github.com/balint1414/sigmaboi">
          <FontAwesomeIcon icon={faGithub} />
          </a>

        </button>
      </footer>
      </div>
 
    </>
  );
}

export default App;
