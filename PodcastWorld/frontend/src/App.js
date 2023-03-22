import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, useLocation} from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/shared/Navigation/Navigation";
// import Register from "./pages/Register/Register";
// import Login from "./pages/Login/Login";
import Authenticate from "./pages/Authenticate/Authenticate";
import Activate from "./pages/Activate/Activate";
import Rooms from "./pages/Rooms/Rooms";
import {useSelector} from 'react-redux'




function App() {
  return (
    <BrowserRouter>
      <Navigation />

        <GuestRoute path="/" element={<Home />}>
          <Home />
        </GuestRoute>


      <GuestRoute path="/authenticate" element={<Authenticate/>}>
          <Authenticate/>
      </GuestRoute>

      <SemiProtectedRoute path="/activate" element={<Activate />}>

      </SemiProtectedRoute>

      <ProtectedRoute path="/rooms" element={<Rooms/>}>
        <Rooms />
      </ProtectedRoute>

      {/* <Routes>
        <Route path="/register" element={<Register/>}>
        </Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />}>
        </Route>
      </Routes> */}
    </BrowserRouter>
  );
}



const GuestRoute = ({children, ...rest}) => {
  const {isAuth} = useSelector((state) => state.auth)
  const location = useLocation()
  return (
    <Routes>
      <Route {...rest}
      element={
          (isAuth ? (
          <Navigate to={{
            pathname: '/rooms',
            state: {from: location},
          }} /> ): ( children ))
        
      } />
    </Routes>
  )
}

const SemiProtectedRoute = ({children, ...rest}) => {
  const {user, isAuth} = useSelector((state) => state.auth)
  const location = useLocation()
  return (
    <Routes>
      
      <Route {...rest} element={
        !isAuth ? (
          <Navigate to={{
            pathname: "/",
            state: {from: location}
          }} />
        ) : isAuth && !user.activated ? (
          children
        ) : (<Navigate to={{
          pathname: "/rooms",
          state: {from: location}
        }} />)
      } />
    </Routes>
  )
}

const ProtectedRoute = ({children, ...rest}) => {
  const {user, isAuth} = useSelector((state) => state.auth)
  const location = useLocation()
  return (
    <Routes>
      
      <Route {...rest} element={
        !isAuth ? (
          <Navigate to={{
            pathname: '/',
            state: {from: location}
          }} />
        ) : isAuth && !user.activated ? (
          (<Navigate to={{
            pathname: "/activate",
            state: {from: location}
          }} />)
        ) : ( children)
      } />
    </Routes>
  )
}
export default App;
