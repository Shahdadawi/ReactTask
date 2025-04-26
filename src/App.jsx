import { useState } from 'react'
import User from './User.jsx';
import CustomButton from './shared/CustomButton.jsx';
import CustomInput from './shared/CustomInput.jsx';
import AddUser from './AddUser.jsx';




function App() {




  const [users, setUsers] = useState([
    { "id": "1", "name": "shahd", "email": "shahd@gmail.com", "isBlocked": "true" },
    { "id": "2", "name": "rand", "email": "rand@gmail.com", "isBlocked": "false" },
    { "id": "3", "name": "khaled", "email": "khaled@gmail.com", "isBlocked": "true" },
    { "id": "4", "name": "rafeef", "email": "rafeef@gmail.com", "isBlocked": "false" },
    { "id": "5", "name": "mohammed", "email": "mohammed@gmail.com", "isBlocked": "true" }

  ]);


  return (


    <div className="users">



      <AddUser />

      {users.map(user =>

        <User name={user.name} email={user.email} key={user.id} />

      )}








    </div>

  );




}

export default App
