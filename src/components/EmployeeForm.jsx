import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmployee,
  updateEmployee,
  clearEditingEmployee,
} from "../features/employees/employeeSlice";

const initialFormState = {
  employeeName: "",
  gender: "",
  department: "",
  dateOfJoin: "",
  email: "",
};

function EmployeeForm() {
  const dispatch = useDispatch();
  const { employeesList, editingId } = useSelector(
    (state) => state.employees,
  );

  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (editingId) {
      const employeeToEdit = employeesList.find((emp) => emp.id == editingId);
      if (employeeToEdit) setFormData(employeeToEdit);
    } else {
      setFormData(initialFormState);
    }
  }, [editingId, employeesList]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      dispatch(updateEmployee({ ...formData, id: editingId }));
    } else {
      dispatch(addEmployee(formData));
    }
    setFormData(initialFormState);
  };

  const handleReset = () => {
    setFormData(initialFormState);
    dispatch(clearEditingEmployee());
  };

  return (
    <div className="form-container">
      <h2>Employee Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Employee Name</label>
          <input
            type="text"
            name="employeeName"
            placeholder="e.g. Goutham Balaji P S"
            value={formData.employeeName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Department</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
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
          <input
            type="date"
            name="dateOfJoin"
            value={formData.dateOfJoin}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="e.g. Gouthambalaji@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="button-group">
          <button type="submit" className="btn-submit">
            {editingId ? 'Update' : 'Submit'}
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
