import { useState } from "react";

const initialFormState = {
  employeeName: "",
  gender: "",
  department: "",
  dateOfJoin: "",
  email: "",
};

function EmployeeForm() {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  const handleReset = (e) => {
    e.preventDefault();
    setFormData(initialFormState);
  }

  return (
    <div className="form-container">
      <h2>Employee Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Employee Name</label>
          <input
            type="text"
            name="employeeName"
            placeholder="e.g. Alex Rivera"
            value={formData.employeeName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" 
          value={formData.gender}
          onChange={handleChange}
          required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Department</label>
          <select name="department" 
          value={formData.department}
          onChange={handleChange}
          required>
            <option value="">Select Department</option>
            <option value="HR">HR</option>
            <option value="Admin">Admin</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="IT">IT</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date of Join</label>
          <input type="date" name="dateOfJoin" value={formData.dateOfJoin}
          onChange={handleChange}
          required/>
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="e.g. alex.rivera@company.com"
            value={formData.email}
            onChange={handleChange}
            required/>
        </div>

        <div className="button-group">
          <button type="submit" className="btn-submit" onClick={handleSubmit}>
            Submit
          </button>
          <button type="reset" className="btn-reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmployeeForm;
