"use client";
import React, { useEffect, useState } from "react";
import Loader from "../../../../components/Loder/Loader";
import axios from "axios";
import Modal from "../../../../components/edit_modal/Modal";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [show_edit, setShow_edit] = useState(false);
  const [edit_data, setEdit_data] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    await axios
      .get("/api/testing-APIs")
      .then((result) => {
        // console.log(result.data.payload)
        setData(result.data.payload);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  async function del(id) {
    setLoading(true);
    await axios
      .delete(`/api/testing-APIs`, { params: { user_id: id } })
      .then((result) => {
        setLoading(false);
        console.log(result.data.message);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
      });
    window.location.reload();
  }

  function update(obj) {
    setShow_edit(true);
    setEdit_data(obj)
  }

  return (
    <>
      <table>
        {/* <thead> */}
        <th>name</th>
        <th>email</th>
        <th>date</th>
        <th>buttons</th>
        {/* </thead> */}

        {/* <tbody> */}
        {data?.map((obj) => {
          return (
            <>
              <tr>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{new Date(obj.createdAt).toLocaleDateString()}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => {
                      del(obj._id);
                    }}
                  >
                    Delete
                  </button>{" "}
                  <button
                    onClick={() => {
                      update(obj);
                    }}
                  >
                    update
                  </button>{" "}
                </td>
              </tr>
            </>
          );
        })}
        {/* </tbody> */}
      </table>

      {loading ? <Loader /> : null}
      {show_edit ? (
        <Modal
          onclose={() => {
            setShow_edit(false);
          }}
          data={edit_data}
          refresh={()=>{ window.location.reload();}}

        />
      ) : null}
    </>
  );
};

export default page;
