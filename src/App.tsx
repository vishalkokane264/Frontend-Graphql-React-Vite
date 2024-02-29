import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_LOCATIONS = gql`
  query ExampleQuery {
    users {
      id
      name
      username
      email
    }
  }
`;

export const App = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  console.log(data);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div>
      <h3>Users list</h3>
      <div>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>USER NAME</th>
              <th>EMAIL</th>
            </tr>
          </thead>
          <tbody>
            {data.users.map((user: any) => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
