
function studentcard(props){
  return(
    <div>
      <img src={props.image}/>
      <h1>fiche etudiant</h1>
      <p>nom & pernom :{props.prenom} {props.nom}</p>
      <p>email :{props.email}</p>
      <p>telephone :{props.telephone}</p>
      <p>filiere:{props.filiere}</p>
      <p>annee:{props.annee}</p>
      <p>groupe :{props.groupe}</p>
      <p>ville :{props.ville}</p>
    </div>
  )
}

/*function studentcard() {
  
  return (
    <div>

      <h1>Fiche etudiant</h1>
      <img src={student.image} alt="image de l etdiant" /><br></br>
      <strong>Nom&Prenom: </strong >{student.nom} {student.prenom} <br></br>
      <strong>Email: </strong>{student.Email} <br></br>
      <strong>telephone :</strong> {student.telephone}<br></br>
      <strong>Filiere:</strong> {student. filiere}<br></br>
      <strong>Annee d'etude:</strong>{student.anneedetude}<br></br>
      <strong>Groupe:</strong>{student.groupe}<br></br>
      <strong>Ville:</strong>{student.ville}<br></br>
      <a href ="mailto=jlassimeriem149gmail.com">contacter</a>
    </div>


    
  )
}

export default App