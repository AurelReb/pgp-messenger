import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useDispatch, changeCurrentConversation } from "../../../config/store";

export default function SingleConversation({ conversation }) {
  const dispatch = useDispatch();

  const handleSelectConversation = () => {
    dispatch(changeCurrentConversation(conversation.id));
  };

  return (
    <ListItem button key={conversation.id} onClick={handleSelectConversation}>
      <ListItemText primary={conversation.name} />
    </ListItem>
  );
}