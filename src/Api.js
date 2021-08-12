import './App.css';
import React, { useEffect, useState } from 'react';
import request from 'request';
function Api() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  /* const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(""); */
  function saveData() {
    /* let data = { name, email, mobile } */
    let data = { name, job }
    // console.warn(data);
    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((resp) => {
      // console.warn("resp",resp);;
      resp.json().then((result) => {
        console.warn("result", result)
      })
    })
  }
  return (
    <div className="App">
      <h1>POST API Example </h1>
      <form onClick={saveData}>
        <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} /> <br /> <br />
        <input type="text" name="name" value={job} onChange={(e) => { setJob(e.target.value) }} /> <br /> <br />
        {/* <input type="text" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} /> <br /> <br />
        <input type="text" name="mobile" value={mobile} onChange={(e) => { setMobile(e.target.value) }} /> <br /> <br /> */}
        <button type="button"  >Save New User</button>
      </form>
    </div>
  );
}
export default Api;
