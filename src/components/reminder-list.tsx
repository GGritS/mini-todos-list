import { FC } from "react";
import { Reminder } from "../models/reminder";
type ReminderListProps = {
  items: Reminder[];
  handleRemoveReminder: (id: number) => void;
};

export const ReminderList: FC<ReminderListProps> = ({
  items,
  handleRemoveReminder,
}) => {
  return (
    <ul className="list-group my-3">
      {items.map((item) => (
        <li className="list-groupe-item" key={item.id}>
          {item.title}
          <button
            className="btn btn-outline-danger mx-2"
            onClick={() => handleRemoveReminder(item.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
