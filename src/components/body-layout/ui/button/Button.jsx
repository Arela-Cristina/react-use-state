import style from "./Button.module.css";

export default function Button({ titles = [], onClick, selectedDescription }) {

  
  return (
    <>
      {titles.map((el) => (
        <button 
        key={el.id} 
        onClick={() => onClick(el.description)}
        className={el.description === selectedDescription ? style.selectedButton : style.kawaiButton}
        > {el.title} </button>
        
      ))}
      
    </>
  );
}
