// import { useState } from "react";
import Card from "./components/card";
import appStyle from "./assets/app.module.css"


export default function App () {
    var pokemon = [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62}, 
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63}, 
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72}, 
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178}, 
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112}, 
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95}, 
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225}, 
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65},
    ]

    var  arr = pokemon.sort(() => Math.random() - 0.5);

    var a = arr.map((item,index) => {
        return <Card exp={item.base_experience} type={item.type} Poster={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`} Name={item.name} key={index}></Card>
    })

    var pointOne = 0
    var pointTwo = 0

    for(let i = 1;i < arr.length;i++){
        if(i <= 4){
            pointOne += arr[i].base_experience
        } else {
            pointTwo += arr[i].base_experience
        }
    }
    
    return <>
        <div className={appStyle.contain}>
            <div className={appStyle.winning}>
                <h1 className={appStyle.winText}>Winning</h1>
                <div className={appStyle.cards}>
                    {pointOne > pointTwo ? a.slice(0,4) : a.slice(4,8)}
                </div>
            </div>
            <div className={appStyle.loser}>
                <h1 className={appStyle.losText}>Loser</h1>
                <div className={appStyle.cards}>
                    {pointOne > pointTwo ? a.slice(4,8) : a.slice(0,4)}
                </div>
            </div>
        </div>
    </>;
}