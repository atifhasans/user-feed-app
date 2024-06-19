import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./components/UserList";
import Header from "./components/Header";


function App() {
  const [data,updateData] = useState([]);
  useEffect(() =>{
    axios
       .get("https://randomuser.me/api/?results=50")
       .then( response => {
        const data = response.data.results;
        updateData(data);
       })
       .catch(error => {
        console.log(error);
       })
  },[])

  return (
    <div className="App">
      <Header title={"UserList"} />
      <div className="row d-flex justify-content-center">
        {data.map((item,index) => (
          <UserList key={index} item={item} />

        ))}
      </div>

      
    </div>
  );
}

export default App;
