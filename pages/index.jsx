
import { useState } from 'react';
import Image from 'next/image'

function Header({ title }) {
  return (<h1>{title}</h1>)
}

function SideMenu({onDragStart}) {
  return (
    <div className="side-menu">
      <Header title="Square Gardening v2" />
      <Vegetables onDragStart={onDragStart}/>
    </div>
  )
}

function Vegetables({onDragStart}) {
  const vegetables = ["basil", "bell-pepper", "broccoli", "cabbage", "carrot", "celery", "chamomile", "corn", "cucumber", "dill", "eggplant", "fennel", "garlic", "green-onion", "beans", "lemongrass", "lettuce", "marigold", "melon", "mint", "onion", "oregano", "parsley", "peas", "potato", "pumpkin", "radish", "rosemary", "tomato", "spinach", "strawberry"]
  return (
    <div className="vegetables">
      {vegetables.map((vegetable) => (
      <Vegetable name={vegetable} onDragStart={onDragStart}/>
    ))
    }
    </div>
  )
}

function Vegetable({name, onDragStart}) {
  const filepath = "veggies/" + name + ".svg"

  return (
    <div key={name} id={name}>
      <Image src={filepath} id={name} width="50" height="50" onDragStart={onDragStart} />
    </div>
  )
}

function Square({ id, chosenVeg }) {
  function handleDragLeave(event) {
    event.stopPropagation()
    event.preventDefault()
    let square = document.getElementById("square" + id)
    square.classList.remove("squareEnter")
    console.log("Drag leave")
  };

  function handleDragOver(event) {
    event.stopPropagation()
    event.preventDefault()
  };

  function handleDragEnter(event) {
    event.stopPropagation()
    event.preventDefault()
    let square = document.getElementById("square" + id)
    square.classList.add("squareEnter")
  };

  function handleDrop(event) {
    event.stopPropagation()
    event.preventDefault()
    let square = document.getElementById("square" + id)
    square.classList.remove("squareEnter")
    square.innerHTML = ""
    let img = document.createElement("img")
    img.src = "veggies/" + chosenVeg + ".svg"
    img.className = "plantedVeg"
    square.appendChild(img)
  };

  const sqId = "square" + id
  return (
    <div className="square" onDragOver={handleDragOver} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDrop={handleDrop} key={id} id={sqId}>
    </div>
  )
}

export default function HomePage() {
  const [chosenVeg, setChosenVeg] = useState()

  function handleDragStart(e) {
    setChosenVeg(e.target.id)
  }

  let squares = []
  for (let i = 0; i <= 15; i++) {
    squares.push(<Square id={i} chosenVeg={chosenVeg} />)
  }
  return (
    <div>
     
      <SideMenu onDragStart={(e) => handleDragStart(e)} />
      <div className="garden-bed">
        {squares}
      </div>

    </div>
  );
}

