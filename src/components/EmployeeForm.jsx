function EmployeeForm() {
  return (
    <div className="form-container">
      <h2>Employee Registration</h2>
      <form>
        <div className="form-group">
          <label>Employee Name</label>
          <input type="text" name="employeeName" placeholder="e.g. Alex Rivera" />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select name="gender">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Department</label>
          <select name="department">
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
          <input type="date" name="dateOfJoin" />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="email" placeholder="e.g. alex.rivera@company.com" />
        </div>

        <div className="button-group">
          <button type="submit" className="btn-submit">
            Submit
          </button>
          <button type="reset" className="btn-reset">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmployeeForm;
