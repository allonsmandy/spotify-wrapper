import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
chai.use(sinonChai);

global.fetch = require("node-fetch");

import SpotifyWrapper from "../src/index";

describe("Search", () => {
  let spotify;
  let fetchedStub;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: "foo",
    });
    fetchedStub = sinon.stub(global, "fetch");
    fetchedStub.resolves({ json: () => {} }); //retorna a promise como voce quiser, neste caso está vazia
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe("Smoke tests", () => {
    it("should exists the searchAlbums methods", () => {
      expect(spotify.search.albums).to.exist;
    });

    it("should exists the searchArtists methods", () => {
      expect(spotify.search.artists).to.exist;
    });
    it("should exists the searchTracks methods", () => {
      expect(spotify.search.tracks).to.exist;
    });
    it("should exists the searchPlaylist methods", () => {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe("spotify.search.artists", () => {
    it("should call fetch function", () => {
      const artists = spotify.search.artists("Incubus");
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it("should call fetch with the correct URL", () => {
      const artist1 = spotify.search.artists("Incubus");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Incubus&type=artist"
      );

      const artist2 = spotify.search.artists("Muse");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Muse&type=artist"
      );
    });
  });

  describe("spotify.search.albums", () => {
    it("should call fetch function", () => {
      const albums = spotify.search.albums("Incubus");
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it("should call fetch with the correct URL", () => {
      const albums1 = spotify.search.albums("Incubus");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Incubus&type=album"
      );

      const albums2 = spotify.search.albums("Muse");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Muse&type=album"
      );
    });
  });

  describe("spotify.search.tracks", () => {
    it("should call fetch function", () => {
      const tracks = spotify.search.tracks("Incubus");
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it("should call fetch with the correct URL", () => {
      const tracks1 = spotify.search.tracks("Incubus");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Incubus&type=track"
      );

      const tracks2 = spotify.search.tracks("Muse");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Muse&type=track"
      );
    });
  });

  describe("spotify.search.playlists", () => {
    it("should call fetch function", () => {
      const playlists = spotify.search.playlists("Incubus");
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it("should call fetch with the correct URL", () => {
      const playlists1 = spotify.search.playlists("Incubus");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Incubus&type=playlist"
      );

      const playlists2 = spotify.search.playlists("Muse");
      expect(fetchedStub).to.have.been.calledWith(
        "https://api.spotify.com/v1/search?q=Muse&type=playlist"
      );
    });
  });
});
