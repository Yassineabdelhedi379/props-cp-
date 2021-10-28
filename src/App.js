import './App.css';
import Name from './Profile/Name';
import Para from './Profile/Para';
import Job from './Profile/Job';
import Alert from './Profile/Alert';
import Example from './Profile/Example';


function App() {
  const handleName = (name) => alert(`${name}`);



  return (
    <div className="App">
    <Name fullName ={Profile} name={handleName} />
    <Para bio  = {test} />
    <Job profession = {test2} />
    <Alert />
    <Example />
 

    </div>
  );
}

export default App;


const test = {
  aboutMe : ' I don"t know what to write  !.'
}


const Profile ={
  firstName : 'Yassine',
  lastName : 'Abdelhedi'
  }

const test2 ={
  profession : 'Learning JavaScript',
  also : 'Developer',

}