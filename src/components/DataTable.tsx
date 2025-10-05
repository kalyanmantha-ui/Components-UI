import React, { useState, useMemo } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  progress: number;
};

export default function DataTable() {
  const users: User[] = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", progress: 100 },
    { id: 2, name: "Bob Smith", email: "bob@example.com", progress: 65 },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", progress: 0 },
    { id: 4, name: "Diana Prince", email: "diana@example.com", progress: 90 },
    { id: 5, name: "Ethan Hunt", email: "ethan@example.com", progress: 100 },
  ];

  const [all, setAll] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  const completedArr = useMemo(() => {
    return users
      .filter((u) => u.progress === 100)
      .map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td className="progressBarContainer">
            <div className="progressBarC">
              <div
                className="progressBar"
                style={{ width: `${user.progress}%` }}
              ></div>
            </div>
          </td>
        </tr>
      ));
  }, [users]);

  const inProgressArr = useMemo(() => {
    return users
      .filter((u) => u.progress < 100)
      .map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td className="progressBarContainer">
            <div className="progressBarC">
              <div
                className="progressBar"
                style={{ width: `${user.progress}%` }}
              ></div>
            </div>
          </td>
        </tr>
      ));
  }, [users]);

  return (
    <div className="DataTableMain">
      <div>
        <button
          onClick={() => {
            setCompleted(false);
            setInProgress(false);
            setAll(true);
          }}
        >
          all
        </button>
        <button
          onClick={() => {
            setAll(false);
            setInProgress(false);
            setCompleted(true);
          }}
        >
          completed
        </button>
        <button
          onClick={() => {
            setAll(false);
            setCompleted(false);
            setInProgress(true);
          }}
        >
          in progress
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>progress</td>
          </tr>
        </thead>
        <tbody>
          {all &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="progressBarContainer">
                  <div className="progressBarC">
                    <div
                      className="progressBar"
                      style={{ width: `${user.progress}%` }}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          {completed && completedArr}
          {inProgress && inProgressArr}
        </tbody>
      </table>
    </div>
  );
}
