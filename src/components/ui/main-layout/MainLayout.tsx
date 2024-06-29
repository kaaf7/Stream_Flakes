import { Navigate, Outlet } from "react-router-dom";

import movies from "@/assets/images/movies.jpg";
import { NavBar } from "@/components/ui/nav-bar";
import { LOGIN_PATH } from "@/constants/constants";

interface MainLayoutProps {
  isLoggedIn: boolean;
}

export function MainLayout({ isLoggedIn }: MainLayoutProps) {
  return isLoggedIn ? (
    <>
      <NavBar isLoggedIn />
      <div 
        style={{ 
          position: "relative", 
          width: "100%", 
          height: "100%" 
        }}
      >
        <img
          src={movies}
          alt="Movies"
          loading="lazy"
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover",
            filter: "blur(8px) brightness(40%)",
          }}
        />
        <div 
          style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            width: "100%", 
            height: "100%", 
            backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2))",
            zIndex: 1000
          }}
        />
      </div>
      <div style={{ background: "black", width: "100%", height: "100vh" }}></div>
      <Outlet />
    </>
  ) : (
    <Navigate to={LOGIN_PATH} />
  );
}
