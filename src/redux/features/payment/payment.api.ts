import { baseApi } from "@/redux/baseApi";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPayment: builder.query({
      query: (id) => ({
        url: `/payment/${id}`,
        method: "GET",
      }),
      providesTags: ["PAYMENT"],
      transformResponse: (res) => res.data,
    }),
  }),
});

export const { useGetPaymentQuery } = paymentApi;
