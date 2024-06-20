import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import { Route } from "react-router-dom";
import ImgMediaCard from "./ImgMediaCard";
import { useCrops } from "../context/CropsContext";
import { UserContext } from "./UserContext";
function Home() {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  // useEffect(() => {
  //   fetch("http://localhost:4000/profile", {
  //     method: "GET",
  //     credentials: "include",
  //   }).then((response) => {
  //     response.json().then((userInfo) => {
  //       setUserInfo(userInfo);
  //     });
  //   });
  // }, [setUserInfo]);

  // function HandleRegister() {
  //   if (!userInfo.id) <Route path="register" element={<RegisterPage />} />;
  //   else <Route path="/" elemenet={<Home />} />;
  // }
  // function HandleLogin() {
  //   if (!userInfo.id) <Route path="login" element={<LoginPage />} />;
  //   else <Route path="/" elemenet={<Home />} />;

  const { crops } = useCrops();
  return (
    // <>
    //   <button onClick={HandleRegister}> register</button>
    //   <button onClick={HandleLogin}> login</button>
    // </>
    <>
      <div>Home</div>
      <NavLink to={"register"}>register</NavLink>
      <NavLink to={"login"}>login</NavLink>
      <div className="card-wrapper-div">
        <div className="sidebar">
          <h1>sidebar</h1>
        </div>

        <div className="home-cards mx-auto">
          <h1 className="heading">Trending crops</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {crops &&
              Object.keys(crops).map((crop, index) => (
                <ImgMediaCard
                  cropName={crop}
                  key={crop}
                  imameLink={crops[crop].imageLink}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
