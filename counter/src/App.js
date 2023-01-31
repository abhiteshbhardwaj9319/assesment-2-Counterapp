import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Button, Grid, Segment } from "semantic-ui-react";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [disable, setdisable] = useState(false);

  const increment = () => {
    setdisable(false);
    setValue(value + 1);
  };
  const decrement = () => {
    if (value == 0) {
      setdisable(true);
      setValue(0);
    } else {
      setdisable(false);
      setValue(value - 1);
    }
  };
 
  return (
    <>
    <Segment>
      <Grid textAlign="center" >
        <Grid.Column style={{ maxWidth: 350 }}>
            <div className="ui grid segment">
              <div className="row ">
                <div>
                  <h1>COUNT</h1>
                  <h2 value={value}>{value}</h2>
                  <div className="btn">
                    <div><button style={{ margin: "0px 90px 0px 5px" }} className="ui positive button" onClick={increment}>Increment</button></div>
                    <div><button className="ui negative button" disabled={disable} onClick={decrement}>Decrement</button></div>
                  </div>
                </div>
              </div>
            </div>
          <div style={{ fontWeight:"bold"}}>Done By Abhitesh Bhardwaj with Registration No. 12018557</div>
        </Grid.Column>
      </Grid>
    </Segment>
    </>
  );
}

export default App;
