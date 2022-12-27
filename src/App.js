import Credits from "./Components/Credit/Credits/Credits";
import Filter from './Components/Filter/Filter/Filter';

function App() {

  const clubs = ["General", "Robotics", "Debating", "Astronomy", "Coding", "Quizing", "Startups"];

  const events = [
    {
      "id":"1",
      "name":"Drone Event",
      "club":"Robotics",
    },
    {
      "id":"2",
      "name":"Robowar Event",
      "club":"Robotics",
    },
    {
      "id":"3",
      "name":"Nitro Race Event",
      "club":"Robotics",
    },
    {
      "id":"4",
      "name":"Sharktank Event",
      "club":"Startups",
    },
    {
      "id":"5",
      "name":"MUN Event",
      "club":"Debating",
    },
    {
      "id":"6",
      "name":"change my Mind Event",
      "club":"Debating",
    },
    {
      "id":"7",
      "name":"astro",
      "club" : "Astronomy",
    },
    {
      "id":"8",
      "name":"paintball",
      "club":"General",
    },
    {
      "id":"9",
      "name":"Enigma",
      "club":"Coding",
    },
    {
      "id":"10",
      "name":"Quizing",
      "club":"Quizing",
    }
  ];

  const domains = [
    {
      "team": "Frontend",
      "members": [
        { "name": "Kingshuk", "desg": "Mentor" },
        { "name": "Ghosh", "desg": "Developer" },
        { "name": "Sayak", "desg": "Developer" },
        { "name": "Adak", "desg": "Developer" },
      ]
    },
    {
      "team": "Backend",
      "members": [
        { "name": "Sriraj", "desg": "Mentor" },
        { "name": "Behera", "desg": "Developer" },
        { "name": "Ayush", "desg": "Developer" },
        { "name": "Varshney", "desg": "Developer" },
      ]
    },
    {
      "team": "Designer",
      "members": [
        { "name": "Aditya", "desg": "Mentor" },
        { "name": "Mittal", "desg": "Designer" },
        { "name": "Shubh", "desg": "Designer" },
        { "name": "Garg", "desg": "Designer" },
      ]
    },
  ];

  return (
    <div>
      {/* <Credits domains = {domains}/> */}
      <Filter clubs = {clubs} events = {events}/>

    </div>
  );
}

export default App;
