import './App.css';
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";

function App() {
  return (
    <div className="app">
      <h1>COVID-19 TRACKER</h1>

      <FormControl className='app__dropdown'>
        <Select
          variant='outlined'
          value='abc'
        >
          <MenuItem value='worldwide'>Worldwide</MenuItem>
          <MenuItem value='worldwide'>yooo</MenuItem>
          <MenuItem value='worldwide'>a</MenuItem>
        </Select>
      </FormControl>

      {/* Header */}
      {/* title + select input drop down */}

      {/* infoboxes */}
      {/* infoboxes */}
      {/* infoboxes */}

      {/* table */}
      {/* graph */}

      {/* map */}
    </div>
  );
}

export default App;
