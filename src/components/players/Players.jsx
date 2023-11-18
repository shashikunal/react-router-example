import React, { Fragment, useState } from "react";
import PLAYERS from "../../player.json";
const Players = () => {
  let [state, setState] = useState(PLAYERS);
  return (
    <div>
      <h1>All Indian Cricket Players list</h1>
      <div className="users">
        {state.map.length > 0 &&
          state.map(player => (
            <Fragment key={player.id}>
              <div className="container">
                <figure>
                  <picture>
                    <img
                      src={player.photo}
                      alt={player.name}
                      height={150}
                      width={150}
                    />
                  </picture>
                </figure>
              </div>
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default Players;
