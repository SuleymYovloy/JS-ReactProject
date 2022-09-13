import './App.css';

function WhoAmi ({name, surname, link}) {
  return (
    <div>
      <h1>My name is {name}, surname - {surname}</h1>
      <a href={link}>My profile</a>
    </div>
  )
}

function App() {
  return (
    <div className='App'>
      {
        WhoAmi({
          name: '111',
          surname: 'David',
          link: 'instagram.com'
        })
      }
      <WhoAmi name="john" surname="David" link="instagram.com"/>
      <WhoAmi name="toopack" surname="toop" link="instagram.com"/>
    </div>
  );
}

export default App;

let props = {
  name: '111',
  surname: 'David',   
  link: 'instagram.com'
}

console.log(props.name);