
export default function KivalasztoMondat(props){
   
    const szetbontottMondat=props.mondat.mondat.split("_")
    let pont=0;
   function kovMondat(){
    document.getElementById("szavam").value=props.mondat.valasztas[0]
    //a gyerek komponensben lekezeljük az eseményt
        props.kovMondat(pont)//kiválasztó.js-ben van , a szüló komponensnek a metódusát jelenti
        //meghívjuk a szülőkomponens metdusát
       
    }

    function pontSzamitas(){
        if(document.getElementById("szavam").value===props.mondat.helyes){
                pont=1
        }
    }

    return(
        <div className="mondat">
         <p>{szetbontottMondat[0]} 
         {/*ide jön a select option*/}
         {
            <select id="szavam" onChange={pontSzamitas}>
                {props.mondat.valasztas.map(
                    (szo, index)=>{
                        return(
                            <option value={szo} key={index}>
                                {szo}
                            </option>
                        )
                    }
                )}
            </select>
         }
         {szetbontottMondat[1]} 
         ({props.mondat.alap})
         <button onClick={kovMondat}>Következő mondat </button>
         </p>
        </div>
    )

    //funtionnal kezdődik, return van benne és csak egy div lehet benne
}
