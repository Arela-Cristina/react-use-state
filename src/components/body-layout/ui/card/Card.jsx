import style from "./Card.module.css";

export default function Card({description = ""}) {
  return (
    <>
      <div className={style.card}>
        <div className={style.cardContent}>
          
            <p className={style.cardDescription}> {description} </p>
      
        </div>
      </div>
    </>
  );
}
