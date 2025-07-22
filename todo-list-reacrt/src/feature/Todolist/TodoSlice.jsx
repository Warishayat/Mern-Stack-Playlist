import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
let savedPastes = [];
try {
  const item = localStorage.getItem("pastes");
  savedPastes = item ? JSON.parse(item) : [];
} catch {
  localStorage.removeItem("pastes");
  savedPastes = [];
}

export const pastSlice = createSlice({
  name: "pasts",
  initialState: {
    pastes: savedPastes,
  },
  reducers: {
    addtoPast: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("Task created Sucessfully");
    },
    updatePast: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);
      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Task updated Sucessfully");
      }
    },
    removeAllPaste: (state, action) => {
      (state.pastes = []), localStorage.removeItem("pastes");
      toast.success("Removede Item Successfully");
    },
    removeFromPaste: (state, action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item) => item._id === pasteId);
      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste is Deleted Successfully");
      }
    },
  },
});

export const { addtoPast, updatePast, removeFromPaste } = pastSlice.actions;
export default pastSlice.reducer;
