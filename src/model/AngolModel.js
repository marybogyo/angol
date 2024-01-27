import { szenvedoMondatok } from "./angol";
export default class AngolModel{
    #lista=[]
    #aktIndex=2;
    #aktMondat={};
    constructor(){
        this.#lista=szenvedoMondatok;
        this.setMondat()
    }
    /** 
     * cím-témakör
     * súgószöveg
     * aktuális mondat
    */
    getCim(){
        return this.#lista[0];
    }

    getSugo(){
        return this.#lista[1];
    }

    setAktIndex(){
        this.#aktIndex++;
        if(this.#aktIndex>=this.#lista.length-1){
            this.#aktIndex=2
        }
        this.setMondat()
    }

    setMondat(){
        console.log(this.#lista[this.#aktIndex])
        this.#aktMondat=this.#lista[this.#aktIndex]
       
        /**magyar: "A fiú ellopta az almát ma reggel.",
        mondat: "The boy _ an apple this morning.",
        alap: "steal",
        helyes: "sore"
        valasztas: ["stole", "is stolen", "was stolen", "steal"],*/
        
        /*a helyes megoldás*/
        this.#aktMondat.helyes=this.#aktMondat.valasztas[0]
        /*választás értékei keverve legyenek 
        ide jön be a keverés */this.#aktMondat.valasztas.sort(
            ()=>{return 0,5 - Math.random}
        )
        this.#aktMondat.valasztas.unshift("Válassz...")  
    }
    getMondat(){
        return this.#aktMondat
    }
    }
