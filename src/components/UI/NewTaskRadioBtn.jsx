import { useState } from "react";

export default function NewTaskRadioBtn({
  priorityData,
  isChecked,
  onCheckedBox,
}) {
  const { priorityId, priority, priorityMain, priorityBrighter } = priorityData;

  const [hover, setHover] = useState(false);

  function handleMouseOver() {
    setHover(true);
  }

  function handleMouseOut() {
    setHover(false);
  }

  let cardBorder = { borderColor: "transparent" };

  if (hover && !isChecked) {
    cardBorder.borderColor = priorityMain;
  }

  if (isChecked) {
    cardBorder.borderColor = priorityBrighter;
  }

  return (
    <li
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={() => {
        onCheckedBox(priorityId);
      }}
    >
      <input
        name="newTaskPriority"
        id={priorityId}
        type="radio"
        defaultChecked={isChecked}
        value={priority}
      />
      <label
        className="custom-radio__card"
        htmlFor={priorityId}
        style={cardBorder}
      >
        <div
          className="custom-radio__image"
          style={{
            backgroundImage: `linear-gradient(45deg, ${priorityMain}, ${priorityBrighter})`,
          }}
        ></div>
        <div className="custom-radio__description">
          <h4 style={{ color: priorityBrighter }}>{priority}</h4>
          <p style={{ color: priorityMain }}>First color</p>
          <p style={{ color: priorityBrighter }}>Second color</p>
        </div>
      </label>
    </li>
  );
}
