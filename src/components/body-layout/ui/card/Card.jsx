import style from "./Card.module.css";

export default function Card() {
  return (
    <div className={style.card}>
      <div className={style.cardContent}>
        <p className={style.cardDescription}>Descrizione</p>
      </div>
    </div>
  );
}
