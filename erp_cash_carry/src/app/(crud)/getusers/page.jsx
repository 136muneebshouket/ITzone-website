"use client";
import React, { useEffect, useState } from "react";
import Loader from "../../../../components/Loder/Loader";
import axios from "axios";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    await axios
      .get("/api/testing-APIs")
      .then((result) => {
        // console.log(result.data)
        setData(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  return (
    <>
      <table >
        <thead>
          <th >name</th>
          <th>email</th>
          <th>date</th>
        </thead>

        <tbody>
          {data?.map((obj) => {
            return (
              <>
                <tr>
                  <td>{obj.name}</td>
                  <td>{obj.email}</td>
                  <td>{ new Date(obj.createdAt).toLocaleDateString() }</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>

      {loading ? <Loader /> : null}
    </>
  );
};

export default page;
