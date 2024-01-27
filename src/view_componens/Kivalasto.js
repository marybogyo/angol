import { useState } from "react";
import AngolModel from "../model/AngolModel";
import KivalasztoMondat from "./KivalasztoMondat";
const angolModel = new AngolModel();

export default function Kivalaszto() {
  const [mondat, setMondat] = useState({ ...angolModel.getMondat() });
  const [pont, setPont] = useState(0);
  //let mondat=angolModel.getMondat()
  function kovMondat(p) {
    //ezt a metódust hívja majd a gyerek komponenst, amikro megtörtént
    console.log("kövekező mondat");
    //akt index növlése

    angolModel.setAktIndex();
    //le kelle kérdezni az aktMondatot
    // mondat=angolModel.getMondat()
    setMondat({ ...angolModel.getMondat() }); //... a másolat
    //alap hiba, hogy a statet közvetlen módosítod
    //ilyen nem írtható!! pont+=p
    setPont(pont+p);
  }
  return (
    //JSX:html és js
    <div className="jatekter">
      <div className="cim">{angolModel.getCim()}</div>
      <KivalasztoMondat mondat={mondat} kovMondat={kovMondat} />
      <div className="pontok">
        <p>Elért pont: {pont}</p>
      </div>
    </div>
  );
}
