import React, { useState } from "react";
import "./Kellify.scss";
import playlistImage from "./assets/playlistImageBase64";
import spotifyIcon from "./assets/images/spotify-icon.png";
import DancingSkeletons from "../../components/DancingSkeletons/DancingSkeletons";

export interface Props {}

const Kellify: React.SFC<Props> = () => {
  let totalItems = 0;
  let currentItems = 0;
  let offset = 0;
  const seedSongs: any[] = [];
  const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function (initial: string | any, item) {
      if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
  const [isLoading, setIsLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [playlistId, setPlaylistId] = useState("");

  const getUserInfo = async (hash: any) => {
    const reqUrl = "https://api.spotify.com/v1/me";

    const request = await fetch(reqUrl, {
      headers: {
        authorization: `Bearer ${hash.access_token}`,
      },
      method: "GET",
    });

    const data = await request.json();

    return data;
  };

  const getSeedSongs = async (hash: any, offset: number) => {
    const reqUrl = `https://api.spotify.com/v1/playlists/2KlMrp890c8uCx2kcyhTOe/tracks?limit=100&offset=${offset}`;

    const request = await fetch(reqUrl, {
      headers: {
        authorization: `Bearer ${hash.access_token}`,
      },
      method: "GET",
    });

    const data = await request.json();

    return data;
  };

  const createPlaylist = async (hash: any, userId: string) => {
    const reqUrl = `https://api.spotify.com/v1/users/${userId}/playlists`;

    const reqBody = {
      name: "Kellify",
      public: false,
      description: "Una playlist curada por la empleada estrella de Spotify.",
    };

    const request = await fetch(reqUrl, {
      headers: {
        authorization: `Bearer ${hash.access_token}`,
      },
      method: "POST",
      body: JSON.stringify(reqBody),
    });

    const data = await request.json();

    return data;
  };

  const changePlaylistImage = async (hash: any, playlistId: string) => {
    const reqUrl = `https://api.spotify.com/v1/playlists/${playlistId}/images`;

    const request = await fetch(reqUrl, {
      headers: {
        authorization: `Bearer ${hash.access_token}`,
        "Content-Type": "image/jpeg",
      },
      method: "PUT",
      body: playlistImage,
    });

    return await request;
  };

  const addPlaylistSongs = async (
    hash: any,
    playlistId: string,
    songUris: any[]
  ) => {
    const reqUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;

    const reqBody = {
      uris: songUris,
    };

    const request = await fetch(reqUrl, {
      headers: {
        authorization: `Bearer ${hash.access_token}`,
        "Content-Type": "applicant/json",
      },
      method: "POST",
      body: JSON.stringify(reqBody),
    });

    const data = await request.json();

    return data;
  };

  const onButtonClick = async (hash: any, offset: number) => {
    setIsLoading(true);
    setShowButton(false);

    const userData = await getUserInfo(hash);
    const seedData = await getSeedSongs(hash, offset);

    seedSongs.push(...seedData.items);
    currentItems = seedSongs.length;

    if (totalItems !== seedData.total) {
      totalItems = seedData.total;
    }

    while (currentItems < totalItems) {
      offset += 100;
      const seedData = await getSeedSongs(hash, offset);
      currentItems = seedSongs.length;
      seedSongs.push(...seedData.items);
    }

    const newPlaylist = await createPlaylist(hash, userData.id);

    await changePlaylistImage(hash, newPlaylist.id);

    function getRandomInt(max: number) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    const randomSongsIndexes = [];
    const randomSongsUris = [];

    for (let i = 0; i < 30; i++) {
      randomSongsIndexes.push(getRandomInt(totalItems));
    }

    for (let i = 0; i < randomSongsIndexes.length; i++) {
      randomSongsUris.push(seedSongs[randomSongsIndexes[i]].track.uri);
    }

    await addPlaylistSongs(hash, newPlaylist.id, randomSongsUris);

    setIsLoading(false);
    setPlaylistId(newPlaylist.id);
    setShowPlaylist(true);
  };

  return (
    <div className="Kellify">
      <div className="KellifyTitleContainer">
        <img src={spotifyIcon} className="SpotifyIcon" alt="Spotify Icon" />
        <div className="KellifyTitle">Kellify</div>
      </div>
      {showButton && (
        <>
          <div className="KellifyDescription">
            Crea tu propia playlist curada por Kelly, la empleada estrella de
            Spotify.
          </div>
          <div
            className="SpotifyButton"
            onClick={() => onButtonClick(hash, offset)}
          >
            Kellify your Spotify
          </div>
        </>
      )}
      {isLoading && (
        <div className="LoadingContainer">
          <DancingSkeletons></DancingSkeletons>
          <div className="LoadingText">Loading...</div>
        </div>
      )}
      {showPlaylist && (
        <div className="PlaylistContainer">
          <iframe
            title="spotify"
            src={`https://open.spotify.com/embed/playlist/${playlistId}`}
            frameBorder="0"
            width="300"
            height="380"
            allow="encrypted-media"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Kellify;
