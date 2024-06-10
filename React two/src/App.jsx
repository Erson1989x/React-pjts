import './App.css';
import Card from '../src/components/Card/Card';

let object = {
  name: 'Erhard',
  age: 25,
  adress: {
    city: 'Berlin',
    street: 'Hauptstraße 1'
  },
  phone: '0176 123 45 67',
  email: 'pHqRr@example.com', 
  }

  let newArray = [1,2,3,4,5,6,7,8,9,10];

const App = () => {
  return (
    <>
      <h1 className='text-3xl font-bold bg-red-500 p-3'>vite with Tailwind</h1>
      <Card username='Erhard' newArray={newArray}/>
      <Card username='Henry' post='Full Stack Developer'/>
      <Card username='Cristian' post='Backend Developer' />
    </>
  );
}

export default App;