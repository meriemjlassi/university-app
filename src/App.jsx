import "./App.css";
import Footer from "./assets/components/Footer.jsx";
import Header from "./assets/components/Header.jsx";
import Navbar from "./assets/components/Navbar.jsx";
import StudentCard from "./assets/components/StudentCard.jsx";

import meriem from "./assets/meriem.jpeg";

const etudiants = [
  {
    prenom: "meriem",
    nom: "jlassi",
    email: "jlassimeriem149@gmail.com",
    telephone: "+216 92202544",
    filiere: "Génie Logiciel et Systèmes d’Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
    image: meriem,
  },
  {
    prenom: "ameni",
    nom: "abdallah",
    email: "ameniabdallah@gmail.com",
    telephone: "+216 22 345 678",
    filiere: "Génie Logiciel et Systèmes d’Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 1",
    ville: "Sousse",
    image: meriem,
  },
  {
    prenom: "rim",
    nom: "jlassi",
    email: "jlassirim@gmail.com",
    telephone: "+216 56545171",
    filiere: "Génie Logiciel et Systèmes d’Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    image:meriem,
    
    
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />

      <main className="container">
        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;