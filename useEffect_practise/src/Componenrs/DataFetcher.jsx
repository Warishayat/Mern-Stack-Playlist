import React, { useState,useEffect } from 'react'
import './Data.css'
const DataFetcher = () => {
    const [data,setData] = useState([]);            // to save the data into the data that will fetch
    const [loading,setLoading] = useState(true);   //for loading until data fetching is getting complete

    useEffect(() => {
        // impact function 
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            setData(data);
            setLoading(false);
        })
    }, [])  //empty array mean it will load once
    
  return (
    <div>
      {
        loading ?
        <h2 className='Data-loader'>Data is Loading Please wait.......</h2>
        :
        (
            <div className="table-container">
                <table className='table'>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item)=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        )
      }
    </div>
  )
}

export default DataFetcher
