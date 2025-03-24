import React from "react";
import {useApi} from "./useApi";

export default {
  title: "Hooks/useApi",
  argTypes: {
    url: {
      control: "text",
      defaultValue: "https://jsonplaceholder.typicode.com/posts",
    },
  },
};

export const Default = ({url}) => {
  const {data, error, loading} = useApi(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h3>API Data:</h3>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
