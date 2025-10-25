import { baseApi } from "@/redux/baseApi";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: "/booking/",
        method: "POST",
        data: bookingData,
      }),
      invalidatesTags: ["BOOKING"],
    }),

    getAllBooking: builder.query({
      query: () => ({
        url: "/booking/",
        method: "GET",
      }),
      providesTags: ["BOOKING"],
      transformResponse: (res) => res.data,
    }),
  }),
});

export const { useCreateBookingMutation } = bookingApi;
