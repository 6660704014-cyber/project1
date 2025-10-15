import React from "react";
function Home(props) {
return (
<div className="App">
<h1>Home</h1>
<h1>{props.x + props.y}</h1>
<h1>{props.myname}</h1>
<h1>{props.x + props.y}</h1>
<h1>{props.myname}</h1>
</div>
);
}
export default Home;