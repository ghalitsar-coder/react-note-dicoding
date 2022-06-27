import React, { useCallback, useMemo } from "react";
import { showFormattedDate } from "../utils/index";
import Button from "./Button";
import { Archive, Check, Delete } from "@mui/icons-material";
const ActiveAndArchive = (props) => {
  const { title, data, handleDelete, handleArchiveAndActive, searchTerms } =
    props;

  const showData = useMemo(() => {
    return (
      <div className="__my-grid">
        {data.length ? (
          data.map((item) => (
            <div className="__card" key={item.title}>
              <h1 className="__title text-lg">{item.title}</h1>
              <p className="text-sm my-3">
                {" "}
                {showFormattedDate(item.createdAt)}{" "}
              </p>
              <p className="my-4">{item.body.substring(0, 40)}</p>
              <div className="flex justify-">
                <Button
                  handleClick={() => handleArchiveAndActive(item.id)}
                  title={item.archived ? <Check /> : <Archive />}
                />
                <Button
                  title={<Delete />}
                  handleClick={() => handleDelete(item.id)}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="flex">
            <h1 className="m-auto">Tidak ada catatan</h1>
          </div>
        )}
      </div>
    );
  }, [data, handleArchiveAndActive, handleDelete, searchTerms]);

  return (
    <div className="__container">
      <h1 className="__title">{title}</h1>
      {showData}
    </div>
  );
};

const Content = (props) => {
  const { data, handleDelete, handleArchiveAndActive, searchTerms } = props;

  return (
    <div>
      <ActiveAndArchive
        title="Active Note"
        data={data.filter((item) => {
          if (
            !item.archived &&
            item.title.toLowerCase().includes(searchTerms.toLowerCase())
          ) {
            return item;
          }
        })}
        handleDelete={handleDelete}
        handleArchiveAndActive={handleArchiveAndActive}
        searchTerms={searchTerms}
      />
      <ActiveAndArchive
        title="Archive"
        data={data.filter((item) => item.archived)}
        handleDelete={handleDelete}
        handleArchiveAndActive={handleArchiveAndActive}
      />
    </div>
  );
};

export default Content;
