import {Board} from './Optimized-path-finder/Board/Board';
import './App.css';
import { initializeApp } from 'firebase/app';
import { connectFunctionsEmulator, getFunctions, httpsCallable } from 'firebase/functions';


const firebaseConfig = {
   
    authDomain: "optimized-path-finder-1a74f.firebaseapp.com",
    projectId: "optimized-path-finder-1a74f",
    storageBucket: "optimized-path-finder-1a74f.appspot.com",
    messagingSenderId: "221335645760",
    appId: "1:221335645760:web:ed229600239c9909a339a5",
    measurementId: "G-1ZGCWNPC48"
};
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

export const pathfinding = httpsCallable(functions, 'pathfinding');
// connectFunctionsEmulator(functions, "localhost", 5001);

function App() {
  return (
    <div className="App">
      <Board></Board>
    </div>
  );
}


export default App;
