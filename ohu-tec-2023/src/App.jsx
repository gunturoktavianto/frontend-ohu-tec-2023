import RegistrationInfo from "./component/RegistrationInfo.jsx"
import Kegiatan from "./component/Kegiatan.jsx"
import PriceList from "./component/PriceList.jsx";
function App() {
  return (
    <div className="App">
      <Kegiatan />
      <RegistrationInfo />
      <PriceList></PriceList>
      <RegistrationInfo />
    </div>
  );
}

export default App;
