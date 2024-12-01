import style from "./Button.module.css";

export default function Button({ titles = [], onClick }) {
  return (
    <>
      {titles.map((el) => (
        <button key={el.id} onClick={() => onClick(el.description)}> {el.title} </button>
      ))}
    </>
  );
}
