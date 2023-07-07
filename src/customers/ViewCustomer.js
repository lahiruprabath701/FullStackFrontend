import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewCustomer() {
  const [customer, setCustomer] = useState({
    customerName: "",
    customerAddress: "",
    contactNumber: "",
    nic:"",
  });

  const { id } = useParams();

  useEffect(() => {
    loadCustomer();
  }, []);

  const loadCustomer = async () => {
    const result = await axios.get(`http://localhost:8081/customer/${id}`);
    setCustomer(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Customer Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {customer.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {customer.name}
                </li>
                <li className="list-group-item">
                  <b>Address:</b>
                  {customer.customerAddress}
                </li>
                <li className="list-group-item">
                  <b>ContactNumber:</b>
                  {customer.contactNumber}
                </li>
                <li className="list-group-item">
                  <b>Nic:</b>
                  {customer.nic}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}