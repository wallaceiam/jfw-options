import React, { useState, useEffect, useContext, createContext } from "react";

interface IAuthContext {
  user: string | null;
  signin: (email: string, password: string) => Promise<void>;
  signout: () => Promise<void>;
}

const defaultValue: IAuthContext = {
  user: null,
  signin: (_: string, __: string) => Promise.resolve(),
  signout: () => Promise.resolve(),
};

const authContext = createContext(defaultValue);

interface IProvideAuth {
  children?: React.ReactNode;
}

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export const ProvideAuth = ({ children }: IProvideAuth) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
const useProvideAuth = () => {
  const [user, setUser] = useState<string | null>(null);

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email: string, password: string) => {
    // return firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then(response => {
    //     setUser(response.user);
    //     return response.user;
    //   });
    setUser(email);
    return Promise.resolve();
  };

  const signout = () => {
    // return firebase
    //   .auth()
    //   .signOut()
    //   .then(() => {
    //     setUser(false);
    //   });
    setUser(null);
    return Promise.resolve();
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  // useEffect(() => {
  //   const unsubscribe = firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(false);
  //     }
  //   });

  //   // Cleanup subscription on unmount
  //   return () => unsubscribe();
  // }, []);

  // Return the user object and auth methods
  return {
    user,
    signin,
    signout,
  };
};
