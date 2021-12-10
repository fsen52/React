import React, { useState, useEffect } from "react";
import { Container, Table, Image } from "react-bootstrap";
import axios from "axios";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [sortType, setSortType] = useState(false);

  const sirala = (key) => {
    countries.sort((a, b) => {
      var valueA = a[key] ? a[key] : "";
      var valueB = b[key] ? b[key] : "";

      var result = 0;
      if (valueA < valueB) {
        result = 1;
      } else if (valueA > valueB) {
        result = -1;

        if (sortType) result *= -1;
        setSortType(!sortType);
      }
      return result;
    });

    setCountries([...countries]);
  };

  useEffect(() => {
    axios("https://restcountries.com/v2/all")
      .then((resp) => {
        setCountries(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="mt-5">
      <h1 className="text-center">Ülkeler</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Bayrak</th>
            <th onClick={() => sirala("name")}>Ülke</th>
            <th onClick={() => sirala("capital")}>Başkent</th>
            <th onClick={() => sirala("population")}>Nüfus</th>
            <th onClick={() => sirala("area")}>Yüz Ölçümü</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <Image src={country.flag} fluid width="100" height="100" />
                </td>
                <td>{country.name}</td>
                <td>{country.capital}</td>
                <td>{country.population}</td>
                <td>
                  {country.area} km <sup>2</sup>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Countries;
