/*import './App.css'

const student ="ali";
const age = 20;

function App() {
  
  return (
    <div>
      <h1>bienvenue {student}</h1>
      <p>vous avez {age} ans.</p>
    </div>

    
  )
}

export default App

*/
import './App.css'
import studentcard from "/.components/studentcard.jsx";
function App() {
  
  return (
    <div className='container'>
      <studentcard prenom="meriem/>
    </div>
  );
}

export default App;