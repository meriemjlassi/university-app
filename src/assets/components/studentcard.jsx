import { useState } from "react";
import "./StudentCard.css";

function StudentCard(props) {
  const ville = props.ville || "Non renseignée";


  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  return (
    <div className="card">
      {props.image && <img src={props.image} alt={`Photo de ${props.prenom}`} />}

      <h1>Fiche étudiant</h1>

      <p><strong>Nom & Prénom :</strong> {props.prenom} {props.nom}</p>

      {coordonneesVisibles && (
        <>
          <p><strong>Email :</strong> {props.email}</p>
          <p><strong>Téléphone :</strong> {props.telephone}</p>
        </>
      )}

      <p><strong>Filière :</strong> {props.filiere}</p>
      <p><strong>Année :</strong> {props.anneeEtude}</p>
      <p><strong>Groupe :</strong> {props.groupe}</p>
      <p><strong>Ville :</strong> {ville}</p>

      <div className="buttons">
        <button onClick={basculerCoordonnees}>
          {coordonneesVisibles ? "Masquer les coordonnées" : "Afficher les coordonnées"}
        </button>
        <a className="btn" href={`mailto:${props.email}`}>Contacter</a>
        <button onClick={() => props.onModifier(props.id)}>Modifier</button>
        <button onClick={() => props.onSupprimer(props.id)}>Supprimer</button>
      </div>
    </div>
  );
}

export default StudentCard;