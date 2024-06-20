// // // import React, { createContext, useState } from "react";

// // // export const UserContext = createContext({});

// // // export default function UserContextProvider({ children }) {
// // //   const [userInfo, setUserInfo] = useState({});

// // //   return (
// // //     <UserContext.Provider value={{ userInfo, setUserInfo }}>
// // //       {children}
// // //     </UserContext.Provider>
// // //   );
// // // }

// // import React, { createContext, useState, useContext, useEffect } from "react";

// // export const UserContext = createContext();

// // export const UserContextProvider = ({ children }) => {
// //   // const [user, setUser] = useState(null);

// //   // const setUserInfo = (userInfo) => {
// //   //   setUser(userInfo);
// //   // };

// //   // const isLoggedIn = () => !!user;
// //   const [userInfo, setUserInfo] = useState(null);
// //   const [isLoading, setIsLoading] = useState(true); // Add loading state

// //   useEffect(() => {
// //     fetch("https://glidethrough-backend.vercel.app/profile", {
// //       credentials: "include",
// //     })
// //       .then((res) => {
// //         res.json().then((userInfo) => {
// //           console.log("User info:", userInfo);
// //           setUserInfo(userInfo);
// //           setIsLoading(false); // Update loading state after fetch completes
// //         });
// //       })
// //       .catch((error) => {
// //         console.error("Fetch error:", error);
// //         setIsLoading(false); // Update loading state in case of error
// //       });
// //   }, []);

// //   return (
// //     <UserContext.Provider value={{ user, setUserInfo, isLoggedIn }}>
// //       {children}
// //     </UserContext.Provider>
// //   );
// // };

// // export const useUserContext = () => useContext(UserContext);

// import React, { createContext, useState, useContext, useEffect } from "react";

// export const UserContext = createContext();

// export const UserContextProvider = ({ children }) => {
//   const [userInfo, setUserInfo] = useState(null);
//   const [isLoading, setIsLoading] = useState(true); // Add loading state

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch("http://localhost:4000/profile", {
//           credentials: "include",
//         });
//         if (response.ok) {
//           const userData = await response.json();
//           setUserInfo(userData);
//         } else {
//           throw new Error("Failed to fetch user data");
//         }
//       } catch (error) {
//         console.error("Fetch error:", error);
//       } finally {
//         setIsLoading(false); // Update loading state after fetch completes
//       }
//     };

//     fetchUserData();
//   }, []);

//   const isLoggedIn = () => {
//     return userInfo !== null;
//   };

//   return (
//     <UserContext.Provider
//       value={{ userInfo, setUserInfo, isLoggedIn, isLoading }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUserContext = () => useContext(UserContext);

import React, { createContext, useState, useContext, useEffect } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("http://localhost:4000/profile", {
          credentials: "include", // Ensure credentials are included for cookies
        });
        if (response.ok) {
          const userData = await response.json();
          setUserInfo(userData);
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const isLoggedIn = () => {
    return userInfo !== null;
  };

  return (
    <UserContext.Provider
      value={{ userInfo, setUserInfo, isLoggedIn, isLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
