import React, { useCallback } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks";

export const Dashboard = () => {
  const auth = useAuth();
  const router = useHistory();

  const signOut = useCallback(() => {
    auth.signout().then(() => router.push("/dashboard"));
  }, [auth, router]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Secret Page</p>
      <button onClick={() => signOut()}>Log Out</button>
    </div>
  );
};
