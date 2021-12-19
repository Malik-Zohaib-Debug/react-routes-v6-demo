import React from 'react';
import { BrowserRouter, Route, Routes, Link, Outlet, useParams } from 'react-router-dom';

export default function App(){
  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link> {" "}
      <Link to="/launch">Launch</Link>
    </nav>
  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="launch" element={<Launch/>} >
          <Route path="" element={<LaunchIndex/>} />
          <Route path=":slug" element={<LaunchShoe/>}/>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>      
    </BrowserRouter>
  );
}


function Home(){
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Launch(){
  return (
    <div>
      <h1>Launch</h1>

      <Outlet />
    </div>
  );
}

function NotFound(){
  return(
    <div>
      <h1>Not Found!</h1>
    </div>
  );
}

function LaunchIndex(){
  return (
    <ul>
      {Object.entries(shoes).map(([slug, {name, img}]) => (
        <li key={slug}>
          <Link to={`/launch/${slug}`}>
            <h2>{name}</h2>
            <img src={img} alt={name} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function LaunchShoe(){
      const {slug} = useParams();
      const shoe = shoes[slug];

      if(!shoe) {
        return <h2>Not Found!</h2>;
      }

      const {name, img} = shoe;

      return (
        <div>
          <ul>
            <li>
              <h2>{name}</h2>
              <img src={img} alt={name}></img>
            </li>
          </ul>
        </div>
      );
}

const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  }
};
