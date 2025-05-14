export default function Checkbox({ id }) {
  return (
    <div>
      <input
        form="select-delete-form"
        name="delete-checkbox"
        id={`checkbox-${id}`}
        type="checkbox"
        value={id}
        className="delete-form__input"
      ></input>
      <label
        htmlFor={`checkbox-${id}`}
        className="delete-form__checkbox"
      ></label>
    </div>
  );
}
