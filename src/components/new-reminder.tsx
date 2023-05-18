import { FC, FormEvent, useState } from "react";

type NewReminderProps = {
  handleAddReminder: (title: string) => void;
};

export const NewReminder: FC<NewReminderProps> = ({ handleAddReminder }) => {
  const [title, setTitle] = useState<string>("");
  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    if (!title) return;
    handleAddReminder(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="title"></label>
      <input
        type="text"
        id="title"
        className="form-control"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button
        type="submit"
        className={`btn btn-primary my-3 rounded-pill ${
          !title ? "disabled btn-secondary" : ""
        }`}
      >
        Add reminder
      </button>
    </form>
  );
};
