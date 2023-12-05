
import { useState } from 'react';

function Header({ title }) {
  return (<h1>{title}</h1>)
}

function SideMenu() {
  return (
    <div className="side-menu">
      <Header title="Square Gardening v2" />
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

