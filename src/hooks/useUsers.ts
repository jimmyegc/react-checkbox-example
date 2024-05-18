import { useEffect, useState } from "react";
import User from "../types/User";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((responseUsers) => {
        const users = responseUsers.map((user: User) => {
          return {
            id: user.id,
            username: user.username,
            email: user.email,
          };
        });
        setUsers(users);
      });
  }, []);

  return {
    users,
  };
};
