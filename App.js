
import './App.css';
import Profile from "./Profile/Profile"



function App(){ 

  const handleName = (name) => {
    alert (`Profile user name : ${name}`)
  };


  return (
    <div className='App'>
    <Profile 
    fullName="Wafa LAHDOUMI"
    bio ="I am 42 years"
    profession ="I am employee"
    handleName={handleName}
  />
  
      
      
    </div>
  );
}

export default App;
