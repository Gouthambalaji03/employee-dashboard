import  { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployee, setEditingEmployee } from '../features/employees/employeeSlice';

const EmployeeTable = () => {
  const dispatch = useDispatch();
  const { employeesList} = useSelector((state) => state.employees);
  
  // Local state for tracking which column is sorted and in what direction
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // useMemo ensures we only recalculate sorting when the list or sort config changes
  const sortedList = useMemo(() => {
    let sortableItems = [...employeesList];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return sortableItems;
  }, [employeesList, sortConfig]);

  const requestSort = (key) => {
    let direction = 'asc';
    // Toggle direction if clicking the same column
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortIndicator = (key) => {
    const isSorted = sortConfig.key === key;
    const arrow = isSorted ? (sortConfig.direction === 'asc' ? '▲' : '▼') : '⇅';
    return (
      <span className={`sort-icon ${isSorted ? 'active' : ''}`}>
        {arrow}
      </span>
    );
  };

  if (employeesList.length === 0) return null; // Hide table if no records

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort('employeeName')}>Employee Name {getSortIndicator('employeeName')}</th>
            <th onClick={() => requestSort('gender')}>Gender {getSortIndicator('gender')}</th>
            <th onClick={() => requestSort('department')}>Department {getSortIndicator('department')}</th>
            <th onClick={() => requestSort('dateOfJoin')}>Date of Join {getSortIndicator('dateOfJoin')}</th>
            <th onClick={() => requestSort('email')}>Email {getSortIndicator('email')}</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedList.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.employeeName}</td>
              <td>{emp.gender}</td>
              <td>{emp.department}</td>
              <td>{emp.dateOfJoin}</td>
              <td>{emp.email}</td>
              <td>
                <button className="action-btn" onClick={() => dispatch(deleteEmployee(emp.id))} title="Delete">🗑️</button>
                <button className="action-btn" onClick={() => dispatch(setEditingEmployee(emp.id))} title="Edit">✏️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;