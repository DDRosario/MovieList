import React from 'react';

export default function SearchListEntry(props) {
  return (
    <span
      onClick={e => {
        props.handleSelection(e, props.movie.imdbID);
      }}
    >
      <div>
        <img src={props.movie.Poster} className="poster" />
        <div>{props.movie.Title}</div>
        <div>{props.movie.Year}</div>
      </div>
    </span>
  );
}
