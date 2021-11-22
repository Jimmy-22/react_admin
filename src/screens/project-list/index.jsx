import React from "react";
import {SearchPanel} from "./search-panel";
import {List} from "./list";
import {useEffect, useState} from "react";

const url = process.env.REACT_APP_API_URL
console.log( process.env)
export const ProjectListScreen = () => {
  const [users, setUsers] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: ''

  })
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(`${url}/projects?name=${param.name}&personId=${param.personId}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  },[param])

  useEffect(() => {
    fetch(`${url}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  },[])

  return <div>
    <SearchPanel users={users} param={param} setParam={setParam} />
    <List users={users} list={list}/>
  </div>
}


