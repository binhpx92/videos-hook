import React from "react";
import { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term); // call 'onFormSubmit' prop from parent component

    // todo : make sure we call callback from parent component
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} action="" className="ui form">
        <div className="field">
          <label htmlFor="">Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(event) => {
              setTerm(event.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
