import Layout from "./layouts/Layout";
import Auth from "./pages/Auth";
import Dashboard from "./pages/dashboard/Dashboard";
import Transactions from "./pages/transactions/Transactions";
import Profile from "./pages/profile/Profile";
import AddMoney from "./pages/addMoney/AddMoney";
import PayBill from "./pages/payBill/PayBill";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addmoney" element={<AddMoney />} />
          <Route path="/paybill" element={<PayBill />} />
        </Route>

        <Route path="/" element={<Auth />} />
      </Routes>      
    </div>
  );
}

export default App;