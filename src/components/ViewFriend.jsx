import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewFriend = () => {
  const [data, changeData] = useState([])
  const fetchData = () => {
    axios.get("https://friendsapi-re5a.onrender.com/view").then(
      (response) => {
        console.log(response.data)
        changeData(response.data)

      }

    ).catch(
      (error) => {
        console.log(error.message)
        alert(error.message)

      }
    )
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div>
      <NavBar />

      <br />
      <center><h1>VIEW DETAILS</h1></center>
      <br />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


            <table class="table">
              <thead>
                <tr>


                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Friend Name</th>
                  <th scope="col">Friend Nick Name</th>
                  <th scope="col">Describe Your Friend</th>
                </tr>
              </thead>
              <tbody>

                {
                  data.map(
                    (value, index) => {
                      return <tr>
                        <td>{value._id}</td>
                        <td>{value.name}</td>
                        <td>{value.friendName}</td>
                        <td>{value.friendNickName}</td>
                        <td>{value.DescribeYourFriend}</td>
                      </tr>
                    }
                  )
                }

              </tbody>
            </table>




          </div>
        </div>
      </div>



    </div>
  )
}

export default ViewFriend