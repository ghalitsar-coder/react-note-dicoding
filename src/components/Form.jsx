import React from "react";
import Button from "./Button";

const Form = (props) => {
  const { handleSubmit, handleChange, noteData, titleLimit, handleLimit } =
    props;

  return (
    <div className="bg-white p-3">
      <div className="flex items-center justify-between">
        <h1 className="__title">Make a note</h1>
        <span>{titleLimit} Character left</span>
      </div>
      <form onSubmit={handleSubmit} className="grid  grid-cols-1 gap-y-4">
        <input
          type="text"
          name="title"
          className="__input"
          value={noteData.title}
          onChange={handleChange}
          onInput={(e) => handleLimit(e.target.value)}
        />
        <textarea
          name="body"
          id=""
          cols="30"
          rows="5"
          className="__input"
          value={noteData.body}
          onChange={handleChange}
        ></textarea>
        <Button title="Buat" />
      </form>
    </div>
  );
};

export default Form;
