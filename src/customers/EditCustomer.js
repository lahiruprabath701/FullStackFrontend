import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditCustomer() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [customer, setCustomer] = useState({
    customerName: "",
    customerAddress: "",
    contactNumber: "",
    nic: "",
  });

  const { customerName, customerAddress, contactNumber,nic } = customer;

  const onInputChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadCustomer();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8081/customer/${id}`, customer);
    navigate("/");
  };

  const loadCustomer = async () => {
    const result = await axios.get(`http://localhost:8081/customer/${id}`);
    setCustomer(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Customer</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
            <label htmlFor="Customer name" className="form-label">
              Customer name 
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="customerName"
                value={customerName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
            <label htmlFor="Customer Address" className="form-label">
              Customer Address 
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your address"
                name="customerAddress"
                value={customerAddress}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
            <label htmlFor="contact Number" className="form-label">
            contact Number
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your contact Number"
                name="contactNumber"
                value={contactNumber}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}