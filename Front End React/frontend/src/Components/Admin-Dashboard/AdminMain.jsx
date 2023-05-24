import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useState, useEffect } from "react";
import "./adminmain.css";

export default function AdminMain() {
  const [user, setUser] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const token = localStorage.getItem("token");

    try {
      axios
        .get("http://127.0.0.1:5000/api/v1/all", {
          headers: {
            "x-access-token": `${token}`,
          },
        })
        .then((res) => {
          setUser(res.data.user);
        });
    } catch (error) {
      console.log("==>err==>", error);
    }
  }, []);

  const deleteUser = async (id) => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/api/v1/delete/" + id, {
        headers: {
          "x-access-token": `${token}`,
        },
      });
      alert(res.data.message)
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const updateUser = async (id) => {
    try {
      const userrole = "ADMIN";
      const res = await axios.post(
        "http://127.0.0.1:5000/api/v1/update/" + id,
        { role: userrole },
        {
          headers: {
            "x-access-token": `${token}`,
          },
        }
      );
      alert(res.data.message)
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="Table">
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User Id</TableCell>
              <TableCell align="left">Username</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Password</TableCell>
              <TableCell align="left">Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.username}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.password}</TableCell>
                <TableCell align="left">{row.role}</TableCell>
                {row.role === "STUDENT" ? (
                  <>
                    <TableCell align="left">
                      <button
                        className="btn"
                        onClick={() => deleteUser(row.id)}
                      >
                        Delete
                      </button>
                    </TableCell>
                    <TableCell align="left">
                      <button className="btn" onClick={() => updateUser(row.id)}>
                        Update
                      </button>
                    </TableCell>
                  </>
                ) : null}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
