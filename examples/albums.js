import SpotifyWrapper from "../src/index";

// get your token here https://developer.spotify.com/console/get-several-albums/
const spotify = new SpotifyWrapper({
  token:
    "BQBEddj7uyB_7Hge94dTPxuP89fMgGZ_WjNmfRtvqAedyNaiPvwgpmCuHUD5SNDsmQ-fvdxMJ1yzocHBfu2Z0yIk-XIRaeqCGrrieSeLOsDVcnfLThiDewLvAw0melZ_Jt3Stt_z",
});

const albums = spotify.search.albums("Incubus");
albums.then((data) => data.albums.items.map((item) => console.log(item.name)));
