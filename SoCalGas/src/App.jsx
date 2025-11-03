import HomepageLayout from "./Layouts/HomepageLayout.jsx";
import MyAccountLayout from "./Layouts/MyAccountLayout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/myAccountPage/Home.jsx";
import Usage from "./pages/myAccountPage/Usage.jsx";
import Bills from "./pages/myAccountPage/Bills.jsx";
import Profile from "./pages/myAccountPage/Profile.jsx";
import Save from "./pages/myAccountPage/Save.jsx";
import Achievements from "./pages/myAccountPage/Achievements.jsx";
import './globals.css'
import Homepage from "./pages/homePage/Homepage.jsx";
import LoginLayout from "./Layouts/LoginLayout.jsx";
import CreateAccount from "./pages/loginPage/CreateAccount.jsx";
import Login from "./pages/loginPage/Login.jsx";
import ProtectedRoute from "./config/ProtectedRoute.jsx";
import {UserProvider} from './lib/context/user.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          
          <Route path="/" element={<HomepageLayout />}>
            <Route index element={<Homepage />} />
          </Route>

          <Route path="/login" element={<LoginLayout />}>
            <Route index element={<Login />} />
            <Route path="create-account" element={<CreateAccount />} />
          </Route>

         
          <Route element={<ProtectedRoute />}>
            <Route path="/myAccount" element={<MyAccountLayout />}>
              <Route index element={<Home />} />
              <Route path="usage" element={<Usage />} />
              <Route path="bills" element={<Bills />} />
              <Route path="profile" element={<Profile />} />
              <Route path="save" element={<Save />} />
              <Route path="achievements" element={<Achievements />} />
            </Route>
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;