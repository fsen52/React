import React, { useState } from "react";
import { Button } from "react-bootstrap";

const State = () => {
  const [sayac, setSayac] = useState(0);

  const artir=()=>{
      setSayac(sayac+1);
  }
  return (
    <div>
      <h1>Sayaç değeri : {sayac}</h1>
      <Button variant="info" onClick={artir}>Artır</Button>
    </div>
  );
};

export default State;
