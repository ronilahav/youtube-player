import React from "react";
import PlayListItem from "../PlayListItem/PlayListItem";
import { List } from "./PlayList.styles";

const PlayList = ({ playList }) => {
  return (
    <List>
      {playList.map(({ id, title, length, url }) => (
        <PlayListItem
          key={id}
          id={id}
          title={title ? title : url}
          length={length}
        />
      ))}
    </List>
  );
};

export default PlayList;
