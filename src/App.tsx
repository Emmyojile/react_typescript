import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App () {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) =>{
    console.log(item);
  };
  const [alertVisibility, setAlertVisibility] = useState(false);

  return <div>
    {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/> */}
    {alertVisibility && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
    <Buttons 
    color="danger"
    onClickButton={() => setAlertVisibility(true)
    }>
    My Button
    </Buttons>

  </div>
}

export default App;