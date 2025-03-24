import React from "react";
import {useApi} from "./useApi";

const meta = {
  title: "Hooks/useApi",
  argTypes: {
    method: {
      control: "select",
      options: ["get", "post", "put", "del"],
      defaultValue: "get",
    },
    url: {
      control: "text",
      defaultValue: "https://jsonplaceholder.typicode.com/posts",
    },
    requestData: {
      control: "object",
      defaultValue: null,
    },
  },
};

export default meta;

export const Default = {
  args:{
    method:"get",
    url:"https://jsonplaceholder.typicode.com/posts",
    requestData:null,
  },
  render:({method, url, requestData}) => {
    const {data, error, loading} = useApi(method, url, requestData);

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
  },
};
