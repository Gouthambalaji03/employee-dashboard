import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeesList: [],
  editingId: null,
};

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employeesList.push({...action.payload, id: Date.now().toString() });
    },
    updateEmployee: (state, action) => {
        const index = state.employeesList.findIndex(emp => emp.id === action.payload.id);
        if (index !== -1) {
            state.employeesList[index] = action.payload;
        }
        state.editingId = null; // clear edit mode after updating
    },
    deleteEmployee: (state, action) => {
       state.employeesList = state.employeesList.filter(emp => emp.id !== action.payload);
       // if the deleted users was currently in the form, clear the form
       if (state.editingId == action.payload) {
        state.editingId = null;
       }
    },

    setEditingEmployee: (state, action) => {
        state.editingId = action.payload;
    },
    clearEditingEmployee: (state) => {
        state.editingId = null;
    }
  },
});

export const { addEmployee, updateEmployee, deleteEmployee, setEditingEmployee, clearEditingEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;