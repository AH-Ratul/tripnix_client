import { baseApi } from "@/redux/baseApi";

export const divisionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addDivision: builder.mutation({
      query: (division) => ({
        url: "/division/create",
        method: "POST",
        data: division,
      }),
      invalidatesTags: ["DIVISION"],
    }),
    removeDivision: builder.mutation({
      query: (divisionId) => ({
        url: `/division/${divisionId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["DIVISION"],
    }),

    getDivision: builder.query({
      query: () => ({
        url: "/division/",
        method: "GET",
      }),
      providesTags: ["DIVISION"],
      transformResponse: (res) => res.data,
    }),
  }),
});

export const {
  useAddDivisionMutation,
  useRemoveDivisionMutation,
  useGetDivisionQuery,
} = divisionApi;
