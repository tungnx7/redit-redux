import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Demo",
    age: "20",
    about: "I'm sofrware engineer",
    avaUrl:
      "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
  },
  reducers:{
      update:(state, action) => {
          state.name = action.payload.name;
          state.age = action.payload.age;
          state.about = action.payload.about;
          state.avaUrl = action.payload.avaUrl;
      }
  }
});

export const {update} = userSlice.actions;
export default userSlice.reducer;
