import './App.css';
import { store } from './app/store';
import { useDispatch, useSelector } from 'react-redux'
import React, { useCallback, useState, useRef, useEffect } from "react";
import { API } from './api/index';
const Home = () => {
  // const listFlow = [
  //     {
  //         "id": "61a8cb451bdce65d6d23b7aa",
  //         "user_id": "17574",
  //         "title": "Flow_Test",
  //         "status": "2",
  //         "description": "description of auto flowdas",
  //         "list": "",
  //         "segment": "",
  //         "created_at": "2021-12-02 20:33:57",
  //         "updated_at": "2021-12-02 20:36:38"
  //     }
  // ];
  const [listFlow, setListFlow] = React.useState([]);
  let token = useSelector(state => state.token);
  const dispatch = useDispatch();
  
  // console.log(store.getState())
  const requestOptions = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
        flowId: "61aece8466b9b519d810628c",
        status: 1,
        tile: "Autoflow 1224444",
        token: "15e009885c84e521c7288c82cf7b3d3cddad3a22"
      }
    )
  };
  useEffect(() => {
    
    store.dispatch({
      type: 'changeToken',
      token: '15e009885c84e521c7288c82cf7b3d3cddad3a22'
    });
    // console.log("store");
    // console.log(store.getState());
    token = store.getState().token;
    API.getAll(token).then((response) => {
        console.log(response);
        setListFlow(response.data.message.data);
    });

    // fetch('https://app.zetamail.vn/api/autoflow/update', requestOptions)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data.message);
    //         setListFlow(data.message.data);
    //         });
    }, [])
    document.title = "Zetamail - Home"
    return (
      <div className="table-responsive">
        <table className="table no-wrap user-table mb-0">
          <thead>
            <tr>
              <th scope="col" className="border-0 text-uppercase font-medium pl-4">#</th>
              <th scope="col" className="border-0 text-uppercase font-medium">Tên</th>
              <th scope="col" className="border-0 text-uppercase font-medium">Mô tả</th>
            </tr>
          </thead>
          <tbody>
            {listFlow.map((value, index) => (
              <tr key={index}>
                <td className="pl-4">{index}</td>
                <td>
                  <a href={process.env.PUBLIC_URL + "/#/AutoFlow?flowId=" + value.id}>{value.id}</a>
                </td>
                <td>
                  <span className="text-muted">{value.description}</span>
                </td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
    );


  }

export default Home;