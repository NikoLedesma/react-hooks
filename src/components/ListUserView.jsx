import { useState, useEffect } from "react";
import React from "react";
import useUser from "../hs-rx/useUser";

const ListUserView = () => {
  const {
    users,
    isUsersFetching,
    usersFetchedError,
    usersFetched,
    searchUsers,
    addUser
  } = useUser();

  const [userName, setUserName] = useState("");

  //   useEffect(() => {
  //     console.log("mounted");
  //     return () => console.log("unmounting...");
  //   }, []);

  useEffect(() => {
    console.log("mounted");
    (!usersFetched || (usersFetched && usersFetchedError)) && searchUsers();
  }, []);

  const inputChange = e => {
    setUserName(e.target.value);
  };
  debugger;
  return (
    <div>
      <h4>Users List</h4>
      {users.length}
      {users.map(user => (
        <div>{user}</div>
      ))}

      {/* {users.length === 0 && (
        <input name="search" value={"Search users"} onClick={searchUsers} type={"button"} />
      )} */}

      <input
        name="userName"
        placeholder="user name"
        value={userName}
        type={"text"}
        onChange={inputChange}
      />
      <input name="add" value={"Add user"} onClick={() => addUser(userName)} type={"button"} />
    </div>
  );
};

export default ListUserView;
