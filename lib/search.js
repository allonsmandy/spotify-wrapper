"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = search;

function searcher(type, query) {
  return this.request("".concat(this.apiURL, "/search?q=").concat(query, "&type=").concat(type));
}

function search() {
  return {
    artists: searcher.bind(this, "artist"),
    albums: searcher.bind(this, "album"),
    tracks: searcher.bind(this, "track"),
    playlists: searcher.bind(this, "playlist")
  };
}