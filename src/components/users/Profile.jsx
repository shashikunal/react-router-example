import { NavLink, useLocation } from "react-router-dom";

const Profile = () => {
  let profileData = useLocation();
  let { avatar_url, login, html_url } = profileData.state;

  return (
    <section id="profile">
      <article>
        <header>
          <NavLink to="/users" className="back_btn">
            Back
          </NavLink>
          <picture>
            <img src={avatar_url} alt={login} />
          </picture>
        </header>
        <main>
          <h2>{login}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
            incidunt totam illum enim possimus et facilis facere explicabo ipsum
            at, dolore placeat, natus, officia ullam? Voluptatum hic laboriosam
            perferendis adipisci, dolorum culpa ab ratione quaerat accusantium
            quidem rem, nisi eius dicta iusto facilis est consequatur molestias,
            labore nam sit delectus?
          </p>
          <a href={html_url} target="_blank" rel="noreferrer">
            View Github profile
          </a>
        </main>
      </article>
    </section>
  );
};

export default Profile;
