import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./Home";
import Post from "./Post";
import Profile from "./Profile";
function Header(props) {
return (
<>
<Router>
<Navbar bg="warning" variant="dark">
<div className="App">

<img src="logo192.png" style={{ width: "50px", height: "50px" }} />
<Navbar.Brand className="p-2" href="https://www.google.co.th">
Brand
</Navbar.Brand>
<Link
to="/"
className=" p-2 text-left text-white text-decoration-none "
>
Home
</Link>
<Link to="/Post" className=" p-2 text-white text-decoration-none">
Post
</Link>
<Link to="/Profile" className=" p-2 text-white">
Profile
</Link>
</div>
</Navbar>
<br />
<br />
<br />
<br />
<br />
<Routes>
<Route path="/" element={<Home x={7} y={1} myname="Nasrin" />} /
>
<Route path="/Post" element={<Post />} />
<Route path="/Profile" element={<Profile />} />
<Route exact path="/Home" element={<Home />} />
</Routes>
</Router>
</>
);
}
export default Header;