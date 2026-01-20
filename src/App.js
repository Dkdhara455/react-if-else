// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//condition rendering
// function App() {
//   const [isLoggedin, setisLoggedin]=useState(false);
//   let message;
//   let user='Dk';
//   if(isLoggedin){
//     message=<div>Welcome to react project {user}</div>;
//   }else{
//     message=<div>Please Login</div>;
//   }
//   return (
//     <div>
//       {message}
//       <button onClick={()=>setisLoggedin(!isLoggedin)}>
//         {/* toggle button */}
//         {isLoggedin ? "Logout" : "Login"}
//       </button>
//     </div>
//   )
// }
function App(){
  const [count, setcount]=useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      {count > 0 && (
        <button onClick={() => setcount(count - 1)}>-</button>
      )}
      <button onClick={() => setcount(count + 1)}>+</button>
    </div>
  );
}

export default App;
