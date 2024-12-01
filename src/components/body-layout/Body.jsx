import style from "./Body.module.css";
import Button from "./ui/button/Button";
import Card from "./ui/card/Card";

export default function Body() {
  return (
    <>
      <section className={style.card}>
        <div className={style.cardButton}>
          <Button />
        </div>
        <div className={style.width}>
          <Card />
        </div>
      </section>
    </>
  );
}
