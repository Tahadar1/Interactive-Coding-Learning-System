import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./Components/header/Header";
import AboutUs from "./Components/About/AboutUs";
import Home from "./pages/Home";
import Course from "./Components/Course-Section/Course";
import Registeration from "./pages/Registeration";
import LoginPage from "./pages/LoginPage";
import Footer from "./Components/Footer/Footer";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import MyCourseDashboard from "./pages/MyCourseDashboard"
import ProtectedRouteStudent from "./pages/ProtectedRouteStudent";
import AddCoursePage from "./pages/AddCoursePage";
import VideoPlayer from "./Components/Video Player/VideoPlayer";
import EditorCode from "./pages/EditorCode";
import VideoPlayerPage from "./pages/VideoPlayerPage";
import ListVideo from "./Components/Video Player/ListVideo";
import ListVideoPage from "./pages/ListVideoPage";
import Account from "./pages/Account";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<AboutUs />}></Route>
        <Route exact path="/course" element={<Course />}></Route>
        <Route exact path="/register" element={<Registeration />}></Route>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/dashboard" element={<ProtectedRouteStudent Component={Dashboard}/>}></Route>
        <Route exact path="/admin" element={<ProtectedRoute Component={AdminDashboard} />}></Route>
        <Route exact path="/mycourse" element={<ProtectedRouteStudent Component={MyCourseDashboard}/> }></Route>
        <Route exact path="/addcourse" element={<ProtectedRoute Component={AddCoursePage}/>}></Route>
        <Route exact path="/play" element={<ProtectedRouteStudent Component={VideoPlayerPage}/>}></Route>
        <Route exact path="/code" element={<ProtectedRouteStudent Component={EditorCode}/>}></Route>
        <Route exact path="/list" element={<ProtectedRouteStudent Component={ListVideoPage}/>}></Route>
        <Route exact path="/account" element={<ProtectedRouteStudent Component={Account}/>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
