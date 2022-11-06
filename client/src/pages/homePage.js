import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { logout } from "../features/auth/authSlice";

export const Home = () => {
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div>
      <a href="/login" className="nav-link" onClick={logOut}>
        LogOut
      </a>
    </div>
  );
};
