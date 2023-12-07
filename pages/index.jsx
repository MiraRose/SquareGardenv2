
import { useState } from 'react';
import Image from 'next/image'

function Header({ title }) {
  return (<h1>{title}</h1>)
}

function SideMenu() {
  return (
    <div className="side-menu">
      <Header title="Square Gardening v2" />
      <Vegetables/>
    </div>
  )
}
function Vegetables() {
  const vegetables = ["basil", "bell-pepper", "broccoli", "cabbage", "carrot", "celery", "chamomile", "corn", "cucumber", "dill", "eggplant", "fennel", "garlic", "green-onion", "beans", "lemongrass", "lettuce", "marigold", "melon", "mint", "onion", "oregano", "parsley", "peas", "potato", "pumpkin", "radish", "rosemary", "spinach", "strawberry"]
  return (
    <div className="vegetables">
      {vegetables.map((vegetable) => (
      <Vegetable name={vegetable}/>
    ))
    }
    </div>
  )
}

function Vegetable({name}) {
  const filepath = "veggies/" + name + ".svg"
  return (
    <div key={name} id={name}>
      <Image src={filepath}  width="50" height="50" />
    </div>
  )
}

function Square({ id }) {
  return (
    <div className="square" key={id} id={id}>
    </div>
  )
}

export default function HomePage() {
  let squares = []
  for (let i = 0; i <= 15; i++) {
    squares.push(<Square id={i} />)
  }
  return (
    <div>
     
      <SideMenu />
      <div className="garden-bed">
        {squares}
      </div>

    </div>
  );
}

