import React, { useEffect, useState } from "react";
import { Content, Form } from "../components";
import { toast } from "react-toastify";
import { getInitialData } from "../utils";

const Home = ({ searchTerms }) => {
  const [noteData, setNoteData] = useState({ title: "", body: "" });
  const [titleLimit, setTitleLimit] = useState(20);
  const [limitHelper, setLimitHelper] = useState(1);
  const [data, setData] = useState([]);
  let maxLength = 20;
  const handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    console.log();
    if (limitHelper < maxLength) {
      setNoteData({ ...noteData, [key]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteData.title && noteData.body) {
      let newNote = {
        title: noteData.title,
        body: noteData.body,
        id: +new Date(),
        createdAt: new Date(),
        archived: false,
      };
      setData((prevData) => [...prevData, newNote]);
    }
    toast("wow keren banget");
  };

  const handleDelete = (noteId) =>
    setData(data.filter((item) => item.id !== noteId));

  const handleArchiveAndActive = (noteId) => {
    setData(
      data.map((item) =>
        item.id === noteId ? { ...item, archived: !item.archived } : item
      )
    );
  };
  const handleLimit = (tc) => {
    setLimitHelper(tc.length);
    if (tc.length <= maxLength) {
      let total = maxLength - tc.length;
      setTitleLimit(total);
    }
  };
  useEffect(() => {
    setData(getInitialData());
  }, []);

  return (
    <div className="__container bg-darkIndigo ">
      <Form
        noteData={noteData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        titleLimit={titleLimit}
        handleLimit={handleLimit}
      />
      <Content
        data={data}
        searchTerms={searchTerms}
        handleDelete={handleDelete}
        handleArchiveAndActive={handleArchiveAndActive}
      />
    </div>
  );
};

export default Home;
