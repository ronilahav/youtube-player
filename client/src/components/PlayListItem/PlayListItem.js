import React from "react";
import {
  ItemContainer,
  DetailsContainer,
  Title,
  Length,
  RemoveButton,
} from "./PlayListItem.styles";

const PlayListItem = ({ id, title, length, onRemove }) => {
  return (
    <ItemContainer>
      <DetailsContainer>
        <Title>{title}</Title>
        {length && <Length>{length}</Length>}
      </DetailsContainer>
      <RemoveButton onClick={() => onRemove(id)} />
    </ItemContainer>
  );
};

export default PlayListItem;
