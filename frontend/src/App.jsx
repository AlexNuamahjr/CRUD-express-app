import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Login from "./pages/Auth/login/Login";
import Register from "./pages/Auth/signup/Signup";
import Home from "./pages/home/Home";
import RecycleBin from "./pages/bin/Bin";
import ResetPassword from "./pages/Auth/resetPassword/ResetPassword";
import EditProfile from "./pages/profile/Profile";
import ChangePassword from "./pages/Auth/changePassword/changePassword";
import ForgotPassword from "./pages/Auth/forgotPassword/ForgotPassword";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bin" element={<RecycleBin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<EditProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
