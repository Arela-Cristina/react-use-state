import style from "./Body.module.css";
import Button from "./ui/button/Button";
import Card from "./ui/card/Card";
import languages from "../../assets/database/languages";
import { useState } from "react";

export default function Body() {
  //elementoSalavto-funzione Che salva il elemento clickato-stato che cambiera
  const [selectedDescription, clickToSelectedDescription] =
    useState("Nessun linguaggio selezionato");

  //funzione che passiamo al elemento nel quale faremmo click
  const handleButtonClick = (description) => {
    clickToSelectedDescription(description);
  };

  return (
    <>
      <section className={style.card}>
        <div className={style.cardButton}>
          <Button 
          titles={languages} 
          selectedDescription={selectedDescription}
          onClick={handleButtonClick} 
          />
        </div>
        <div className={style.width}>
          <Card description={selectedDescription} />
        </div>
      </section>
    </>
  );
}
