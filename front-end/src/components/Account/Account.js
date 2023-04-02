import { useState } from "react";
import { auth } from "../../firebaseConfig";

export const Account = () => {


    const dataRef = ref(database, "path/to/data");

  const user = auth.currentUser;
  return <div>{user ? user.displayName : "hi"}</div>;
};
