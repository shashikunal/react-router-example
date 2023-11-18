import { Fragment, useState } from "react";
import { useLocation, Link, Outlet } from "react-router-dom";
import USER from "../../data.json";
const AllUsers = () => {
  let location = useLocation();
  let [state, setState] = useState(USER);
  console.log(location.state);

  return (
    <main>
      <div className="users">
        {state.map.length > 0 &&
          state.map(user => (
            <Fragment key={user.id}>
              <div className="container">
                <figure>
                  <picture>
                    <img
                      src={user.avatar_url}
                      alt={user.login}
                      height={150}
                      width={150}
                    />
                  </picture>
                  <Link to={`/users/${user.id}`} state={user}>
                    View More
                  </Link>
                </figure>
              </div>
            </Fragment>
          ))}
      </div>
    </main>
  );
};

export default AllUsers;
