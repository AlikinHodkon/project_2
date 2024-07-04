import { useState } from "react"
import "../styles/Tile.css"
export default function Tile({openPanels, color, clrId}) {
    const [isActive, setActive] = useState(false);
    function clickF(event){
        if (openPanels >= 2){
            setActive(false);
            return;
        }
        event.target.classList.remove('tileClosed');
        event.target.classList.add('tileOpen');
    }
    // ${isActive ? "tileOpen": "tileClosed"}
  return (
    <button onClick={clickF} className={`w-full h-full tile ${color} tileClosed ${clrId}`}></button>
  )
}
