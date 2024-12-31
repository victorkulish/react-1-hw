import UserProfile from "./components/UserProfile";
import AnimalStatus from "./components/AnimalStatus";
import TransactionTable from "./components/TransactionTable";
import "./app.css";

function App() {
  return (
    <div className="App">
      <UserProfile />
      <AnimalStatus />
      <TransactionTable />
    </div>
  );
}

export default App;
