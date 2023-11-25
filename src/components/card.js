import style from "./../assets/card.module.css"

export default function Card ({Poster,Name,type,exp}) {
    return <div className={style.card}>
        <h2>{Name}</h2>
        <img src={Poster} alt="pokeman" className={style.pokemonImg}/>
        <h3>{`Type:${type}`}</h3>
        <h3>{`EXP:${exp}`}</h3>
    </div>
}