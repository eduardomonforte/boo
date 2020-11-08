import React from "react";
import "./Home.scss";
import DancingSkeletons from "../../components/DancingSkeletons/DancingSkeletons";

export interface Props {}

const Home: React.SFC<Props> = () => {
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const clientId = "6b608065c83645dba8eb8b5f3ba0744f";
  const redirectURI = `${window.location.href}kellify`;
  const scopes = [
    "playlist-modify-private",
    "user-read-email",
    "ugc-image-upload",
  ];
  const responseType = "token";
  const showDialog = true;

  return (
    <div className="Home">
      <p className="HomeTitle">Happy Kellyween!</p>
      <p className="HomeDescription">
        <span className="Italic">Spooky season</span> podrá haber terminado,
        pero las ánimas dejaron una última sorpresa. 👻
      </p>
      <a
        className="SpotifyButton"
        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join(
          "%20"
        )}&response_type=${responseType}&show_dialog=${showDialog}`}
      >
        LOG IN WITH SPOTIFY
      </a>
      <div className="HomeFooter">
        <DancingSkeletons></DancingSkeletons>
      </div>
    </div>
  );
};

export default Home;
