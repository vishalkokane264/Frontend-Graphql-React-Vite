import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_LOCATIONS = gql`
  query GetBooks {
    books {
      title
      author
    }
  }
`;

export const App = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  console.log(data);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return data.locations.map(({ id, name, description, photo }: any) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
};

export default App;
