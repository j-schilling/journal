import Input from "./Input";

export default function EntryForm({ title }) {
  return (
    <form action="">
      {title}
      <Input label="Motto" type="text" id="motto" />
      <Input label="Notes" type="text" id="notes" />
    </form>
  );
}
