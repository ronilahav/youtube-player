import React from "react";
import { ItemContainer, Title, Length } from "./PlayListItem.styles";

const PlayListItem = ({ id, title, length }) => {
  return (
    <ItemContainer>
      <Title>{title}</Title>
      {length && <Length>{length}</Length>}
    </ItemContainer>
  );
};

export default PlayListItem;
