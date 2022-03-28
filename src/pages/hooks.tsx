import React, { useEffect, useState, useCallback } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export const Hooks = () => {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("Bat");
  const [lastName, setLastName] = useState("Man");

  const incrementCount = () => {
    setCount(count + 1);
  };
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFirstName(e.target.value);
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLastName(e.target.value);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [user, setUser] = useState({ name: "", email: "" });
  const fetchUser = useCallback(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
    const newUser = await res.json();
    setUser(newUser);
  }, []);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={incrementCount}>Click Me</button>
      <br />
      <div>
        <input value={firstName} onChange={handleFirstNameChange} />
        <br />
        <input value={lastName} onChange={handleLastNameChange} />
        <p style={{ textAlign: "center" }}>
          Hello,
          <span style={{ textAlign: "center" }}>
            {firstName} {lastName}
          </span>
        </p>
      </div>
      <ListItem dense divider>
        <ListItemText primary={user.name} secondary={user.email} />
      </ListItem>
    </div>
  );
};
