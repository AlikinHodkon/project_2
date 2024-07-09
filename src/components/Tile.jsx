import "../styles/Tile.css"
export default function Tile({openPanels, color, clrId}) {
    function clickF(event){
        if (openPanels >= 2) return;
        event.target.classList.remove('tileClosed');
        event.target.classList.add('tileOpen');
    }
  return (
    <button onClick={clickF} className={`w-full h-full tile ${color} tileClosed ${clrId}`}></button>
  )
}
