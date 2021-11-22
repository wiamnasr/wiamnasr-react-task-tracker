import React from "react";

import { useState } from "react";

// Styles
import { Wrapper, Content } from "./AddTask.styles";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <Wrapper onSubmit={onSubmit}>
      <Content>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </Content>

      <Content>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        ></input>
      </Content>

      <Content>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </Content>

      <input type='submit' value='Save Task' />
    </Wrapper>
  );
};

export default AddTask;
