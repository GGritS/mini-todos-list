import { useState, useEffect } from "react";
import { ReminderList } from "./components/reminder-list";
import { Reminder } from "./models/reminder";
import { addReminder, getReminders } from "./services/reminder";
import { NewReminder } from "./components/new-reminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadReminders = async () => {
    setLoading(true);
    const res = await getReminders();
    !res ? null : setReminders(res);
    setLoading(true);
  };

  const handleRemoveReminder = (id: number) => {
    const filetereReminders = reminders.filter((r) => r.id !== id);
    setReminders(filetereReminders);
  };

  const handleAddReminder = async (title: string) => {
    const newReminder = await addReminder(title);
    setReminders((prev) => [newReminder, ...prev]);
  };

  useEffect(() => {
    loadReminders();
  }, []);

  return (
    <>
      <NewReminder handleAddReminder={handleAddReminder} />
      <ReminderList
        items={reminders}
        handleRemoveReminder={handleRemoveReminder}
      />
    </>
  );
}

export default App;
