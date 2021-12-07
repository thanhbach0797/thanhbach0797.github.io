import React, { Component } from 'react';
import './App.css';
import { store } from './app/store';
import { useSelector } from 'react-redux';
const Home =()=> {
    const listFlow = [
        {
            "id": "61a8cb451bdce65d6d23b7aa",
            "user_id": "17574",
            "title": "Flow_Test",
            "status": "2",
            "description": "description of auto flowdas",
            "list": "",
            "segment": "",
            "created_at": "2021-12-02 20:33:57",
            "updated_at": "2021-12-02 20:36:38"
        }
    ];
    const token = useSelector(state => state.token);
    // console.log(store.getState())
    const requestOptions = {
        method: 'GET',
    };
    fetch('https://app.zetamail.vn/api/autoflow/getall?token='+token+'&p=1&limit=50', requestOptions)
        .then(response => response.json())
        .then(data => {console.log(data);});
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
            {listFlow.map((value, index)=>(
                <tr key={index}>
                <td className="pl-4">{index}</td>
                <td>
                    <a href={"/AutoFlow?node-id="+value.id}>{value.title}</a>
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