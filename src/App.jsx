import { useState } from "react";
import "./App.css";
import Footer from "./assets/components/Footer.jsx";
import Header from "./assets/components/Header.jsx";
import Navbar from "./assets/components/Navbar.jsx";
import StudentCard from "./assets/components/StudentCard.jsx";

import meriem from "./assets/meriem.jpeg";


function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      prenom: "meriem",
      nom: "jlassi",
      email: "jlassimeriem149@gmail.com",
      telephone: "+216 92 202 544",
      filiere: "Génie Logiciel et Systèmes d’Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
      image: meriem,
    },
    {
      id: 2,
      prenom: "ameni",
      nom: "abdallah",
      email: "ameni.abdallah@gmail.com",
      telephone: "+216 22 345 678",
      filiere: "Licence Computer Science",
      anneeEtude: "1ère année",
      groupe: "LCS 1",
      ville: "Sousse",
      image: meriem,
    },
    {
      id: 3,
      prenom: "rim",
      nom: "jlassi",
      email: "rim.jlassi@gmail.com",
      telephone: "+216 27 567 890",
      filiere: "Licence Business Computing",
      anneeEtude: "2ème année",
      groupe: "LBC 2",
    },
  ]);

  const [recherche, setRecherche] = useState("");

  
  function ajouterEtudiant() {
    const nouvelEtudiant = {
      id: Date.now(),
      prenom: "Yosser",
      nom: "haj brahem",
      email: `yassine.${Date.now()}@gmail.com`,
      telephone: "+216 44 444 444",
      filiere: "Génie Logiciel et Systèmes d’Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 1",
      ville: "bekalta",
    };
    setEtudiants([...etudiants, nouvelEtudiant]);
  }

  
  function supprimerEtudiant(id) {
    setEtudiants(etudiants.filter((e) => e.id !== id));
  }

  
  function modifierEtudiant(id) {
    const nouveauPrenom = prompt("Nouveau prénom :");
    if (!nouveauPrenom || nouveauPrenom.trim() === "") return;

    setEtudiants(
      etudiants.map((e) =>
        e.id === id ? { ...e, prenom: nouveauPrenom.trim() } : e
      )
    );
  }


  const etudiantsFiltres = etudiants.filter((e) => {
    const texte = recherche.toLowerCase();
    return (
      e.nom.toLowerCase().includes(texte) ||
      e.prenom.toLowerCase().includes(texte) ||
      e.filiere.toLowerCase().includes(texte)
    );
  });

  return (
    <div className="app">
      <Header />
      <Navbar />

      <div className="actions">
        <input
          type="text"
          placeholder="Rechercher (nom, prénom, filière)..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
        />
        <button onClick={ajouterEtudiant}>+ Ajouter un étudiant</button>
      </div>

      <main className="container">
        {etudiantsFiltres.map((etudiant) => (
          <StudentCard
            key={etudiant.id}
            id={etudiant.id}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
            onSupprimer={supprimerEtudiant}
            onModifier={modifierEtudiant}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;