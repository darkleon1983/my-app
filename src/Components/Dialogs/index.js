import React from "react";
import { Link } from "react-router-dom";
import styles from './Dialogs.module.css'

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={styles.dialog + ' ' + styles.active}>
      <Link to={path}>{props.name}</Link>
    </div>
  );
}

const Message = (props) => {
  return (
    <div className={styles.message}>{props.message}</div>
  );
}

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Andrey" id="2" />
        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Sasha" id="4" />
        <DialogItem name="Victor" id="5" />
        <DialogItem name="Valera" id="6" />
      </div>
      <div className={styles.messages}>
        <Message message="Hi" />
        <Message message="How is your IT-kamasutra?" />
        <Message message="Yo" />
        <Message message="Yo" />
        <Message message="Yo" />
      </div>
    </div>
  );
}

export default Dialogs;