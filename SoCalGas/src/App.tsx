import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import HomepageLayout from './layouts/HomepageLayout';
import MyAccountLayout from './layouts/MyAccountLayout';
import Home from './pages/myAccount/Home.tsx';
import Usage from './pages/myAccount/Usage.tsx';
import Bills from './pages/myAccount/Bills.tsx';
import Profile from './pages/myAccount/Profile.tsx';
import Save from './pages/myAccount/Save.tsx';
import Achievements from './pages/myAccount/Achievements.tsx';
import Homepage from './pages/home/Homepage.tsx';
import LoginLayout from './layouts/LoginLayout';
import CreateAccount from './pages/login/CreateAccount.tsx';
import Login from './pages/login/Login.tsx';
import ProtectedRoute from './components/auth/ProtectedRoute.tsx';
import { UserProvider } from './context/UserContext.tsx';
import './globals.css';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default App;