import React, { useCallback, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";


import { logout, user } from "../features/auth/authSlice";

export const Home = () => {
  const dispatch = useDispatch();

  const { name,email } = useSelector((state) => state.auth);

  useEffect(() => {
     dispatch(user());
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div>
      <a href="/login" className="nav-link" onClick={logOut}>
        LogOut
      </a>

      <h1>{name}</h1>
    </div>
  );
};
