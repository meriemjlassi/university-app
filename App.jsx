import "./App.css";
import image from "./assets/meriem.jpeg"; 

const student = {
  nom: "meriem jlassi",
  email: "jlassimeriem149@gmail.com",
  telephone: "+216 92202544",
  filiere: "Génie Logiciel et Systèmes d’Information",
  annee: "2ème année",
  groupe: "GLSI 2",
  ville: "Mahdia",
};

function App() {
  return (
    <div className="page">
      <div className="card">
        <img className="avatar" src={image} alt={student.nom} />
        <h1>Fiche étudiant</h1>

        <p><strong>Nom & Prénom :</strong> {student.nom}</p>
        <p><strong>Email :</strong> {student.email}</p>
        <p><strong>Téléphone :</strong> {student.telephone}</p>
        <p><strong>Filière :</strong> {student.filiere}</p>
        <p><strong>Année d'étude :</strong> {student.annee}</p>
        <p><strong>Groupe :</strong> {student.groupe}</p>
        <p><strong>Ville :</strong> {student.ville}</p>

        <a className="btn" href={`mailto:${student.email}`}>
          Contacter
        </a>
      </div>
    </div>
  );
}

export default App;