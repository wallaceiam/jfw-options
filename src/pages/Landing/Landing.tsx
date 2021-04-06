import React, { useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../hooks";

export const Landing = () => {
  const auth = useAuth();
  const router = useHistory();

  const signIn = useCallback(() => {
    auth.signin("user", "").then(() => router.push("/dashboard"));
  }, [auth, router]);

  return (
    <div>
      <h1>Landing</h1>
      <p>
        <Link to="/dashboard">View Dashboard</Link>
      </p>
      <button onClick={() => signIn()}>Log In</button>
    </div>
  );
};
