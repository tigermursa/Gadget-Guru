import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }), //the main url link
  tagTypes: ["products"],
  endpoints: (builder) => ({
    //posting task / Create
    addData: builder.mutation({
      query: (data) => ({
        url: "/api/v1/phone/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products"], //for make fetch after the action
    }),
  }),
});

//CRUD api hooks
export const { useAddDataMutation } = baseApi;
