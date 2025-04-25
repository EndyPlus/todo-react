// import { useState } from "react";
import TaskEdit from "../../../UI/Modal";
import TaskInfo from "../../../UI/Modal";

export default function TaskExtended({ onToggleExpand }) {
  // const [isEditing, setIsEditing] = useState(false);

  // function toggleEdit() {
  //   setIsEditing((prevState) => !prevState);
  // }

  // function handleOpenEditing() {
  //   ref.current.close();
  //   // dialog.current.showModal();
  // }

  return (
    <>
      <div className="list-item--extended">
        <div>
          {/* {isEditing && <TaskEdit />}
          {!isEditing && <TaskInfo />} */}
          {/* <button onClick={toggleEdit}>{isEditing ? "Edit" : "Return"}</button> */}
        </div>
        <div>
          <button onClick={onToggleExpand}>Close</button>
          <button>dsfdsfds</button>
        </div>
      </div>
    </>
  );
}

// ❌

// ✅
