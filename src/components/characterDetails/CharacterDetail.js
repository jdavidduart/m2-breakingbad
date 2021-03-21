import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./CharacterDetail.css";

function CharacterDetail() {
  /*
    PISTA: podemos obtener lo que llegue por parametros con el hook useParams.
    Que hace useParams? https://reactrouter.com/web/example/url-params
    */

  return (
    <div className="CharacterDetail">
      <h1>Character Details</h1>

      {/*Aqui crearemos una lista de detalles de cada personaje*/}
      <img className="CharacterDetail__Photo" src="" alt="" />
    </div>
  );
}

export default CharacterDetail;
