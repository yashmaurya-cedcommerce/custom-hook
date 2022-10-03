import './App.css';
import useFetchData from './custom';


function App() {

  const { result, fetchData } = useFetchData();

  return (
    <div className="App">

      <button className='fetchBtn' onClick={() => fetchData("fetch")}>Fetch Data From API</button>
      {console.log(result)}
      <div className='resultTable'>
        {result?.map((item) => {
          return(<>
            <div className='rowFlex'>
              <p className='tableRows'>{item.id}</p>
              <p className='tableRows'>{item.name}</p>
              <p className='tableRows'>{item.username}</p>
              <p className='tableRows'>{item.email}</p>
              <p className='tableRows'>{item.website}</p>
            </div>
          </>)
        })}
      </div>

    </div>
  );
}

export default App;
