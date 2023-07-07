import React from 'react';
import Team from "./scenes/users/users";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard/dashboard";
import Contacts from "./scenes/rooms/rooms";
import Invoices from "./scenes/booking/booking";
import Form from "./scenes/form/form";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import { UserContextProvider } from "./Context/userContext";
import AddUserForms from './components/RoomForms/AddUserForms';
import ClientDetailsForm from './components/Booking/ClientDetailsForm';
import DateRoom from './components/Booking/DateRoom';
import MeetingRoom from './components/MeetingRoom/MeetingRoom';
import BtnBook from './components/BtnBook/BtnBook';
import EditUserForms from './components/RoomForms/EditUserForm';

function App1() {
  return (
    <UserContextProvider>
              <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/addUserForm" element={<AddUserForms />} />
                <Route path="/clientdetailsform" element={<ClientDetailsForm />} />
                <Route path="/dateroom" element={<DateRoom />} />
                <Route path="/meetingroom" element={<MeetingRoom />} />
                <Route path="/btnbook" element={<BtnBook />} />
                <Route path="/editUserForms/:id" element={<EditUserForms />}></Route>
               </Routes>
    </UserContextProvider>
  );
}

export default App1;
