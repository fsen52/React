import React, { useState } from "react";
import { Container } from "react-bootstrap";

const RandomImages = () => {
  const [sayi, setSayi] = useState(0);

  const sayiUret = () => {
    const rastgeleSayi = Math.floor(Math.random() * 9 + 1);
    setSayi(rastgeleSayi);
  };

  return <Container className="mt-5"></Container>;
};

export default RandomImages;
