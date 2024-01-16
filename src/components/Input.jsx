export default function Input({ label, type, id }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </>
  );
}
