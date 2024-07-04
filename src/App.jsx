import { useMemo, useState } from 'react'
import './App.css'
import Tile from "./components/Tile.jsx"

function App() {
  const [openPanels, setOpenPanels] = useState(0);
  const [clrId, setColorId] = useState(null);
  const shuffle = (array) => {
    let currentIndex = array.length;
  
    while (currentIndex != 0) {
  
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  const colors = useMemo(() => {
    const allColors = [
      "bg-red-600", 
      "bg-yellow-500", 
      "bg-green-500", 
      "bg-blue-500", 
      "bg-red-600", 
      "bg-yellow-500", 
      "bg-green-500", 
      "bg-blue-500",
      "bg-orange-600", 
      "bg-emerald-500", 
      "bg-purple-500", 
      "bg-pink-500", 
      "bg-orange-600", 
      "bg-emerald-500", 
      "bg-purple-500", 
      "bg-pink-500",
    ]
    return shuffle(allColors);
  }, [])
  console.log(colors);
  const tiles = [
    {id:1, clrId:"tile1", color:colors[0]},
    {id:2, clrId:"tile2", color:colors[1]},
    {id:3, clrId:"tile3", color:colors[2]},
    {id:4, clrId:"tile4", color:colors[3]},
    {id:5, clrId:"tile5", color:colors[4]},
    {id:6, clrId:"tile6", color:colors[5]},
    {id:7, clrId:"tile7", color:colors[6]},
    {id:8, clrId:"tile8", color:colors[7]},
    {id:9, clrId:"tile9", color:colors[8]},
    {id:10, clrId:"tile10", color:colors[9]},
    {id:11, clrId:"tile11", color:colors[10]},
    {id:12, clrId:"tile12", color:colors[11]},
    {id:13, clrId:"tile13", color:colors[12]},
    {id:14, clrId:"tile14", color:colors[13]},
    {id:15, clrId:"tile15", color:colors[14]},
    {id:16, clrId:"tile16", color:colors[15]}
  ]
  function clickPanel(event){
    if (clrId != null){
      if (clrId[4] == event.target.classList[4]) return;
    }
    if (openPanels >= 1){
      if (event.target.classList[3] == clrId[3]){
        setOpenPanels(0);
      }else{
        setOpenPanels(0);
        clrId.remove('tileOpen');
        clrId.add('tileClosed');
        event.target.classList.remove('tileOpen');
        event.target.classList.add('tileClosed');
        setColorId(null);
      }
      return;
    }
    setColorId(event.target.classList);
    setOpenPanels(openPanels+1);
  }
  return (
    <div className='flex flex-col'>
      <h1 className='text-center font-sans font-semibold text-[64px]'>Choose a pare</h1>
      <div className='flex flex-wrap justify-center'>
        {tiles.map((tile) => <div key={tile.id} onClick={clickPanel} className='w-1/5 h-[100px] m-5'><Tile color={tile.color} clrId={tile.clrId} openPanels={openPanels}/></div>)}
      </div>
    </div>
  )
}

export default App
