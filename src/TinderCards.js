import "./TinderCards.css";

import React, { useEffect, useState } from "react";

import TinderCard from "react-tinder-card";
import instance from "./axios";

function TinderCards() {
  const [people, setPeople] = useState([]);

  // useEffect hook
  useEffect(() => {
    async function fetchData() {
      const req = await instance.get("/tinder/cards");
      console.log(req.data);
      setPeople(req.data);
    };
    fetchData();
  }, [])

  const swiped = (dir, nameToDelete) => {
    console.log("removing" + nameToDelete);
    // setLastDirection(dir);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="TinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(event_dir) => swiped(event_dir, person.name)}
            onCardLeftScreen={(event) => outOfFrame(person.name)}
          >
            <div style={{ backgroundImage: `url(${person.imgUrl})` }} className="card">
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
