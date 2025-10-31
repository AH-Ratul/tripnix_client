import { baseApi } from "@/redux/baseApi";

export const tourApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addTourType: builder.mutation({
      query: (tourType) => ({
        url: "/tour/create-tour-type",
        method: "POST",
        data: tourType,
      }),
      invalidatesTags: ["TOUR"],
    }),

    addTour: builder.mutation({
      query: (tourData) => ({
        url: "/tour/create",
        method: "POST",
        data: tourData,
      }),
      invalidatesTags: ["TOUR"],
    }),

    removeTourType: builder.mutation({
      query: (tourTypeId) => ({
        url: `/tour/tour-types/${tourTypeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TOUR"],
    }),

    getTourType: builder.query({
      query: () => ({
        url: "/tour/tour-types",
        method: "GET",
      }),
      providesTags: ["TOUR"],
      transformResponse: (res) => res.data,
    }),

    getAllTour: builder.query({
      query: (params) => ({
        url: "/tour/",
        method: "GET",
        params: params,
      }),
      providesTags: ["TOUR"],
      transformResponse: (res) => res.data,
    }),

    getSingleTour: builder.query({
      query: (tourId) => ({
        url: `/tour/${tourId}`,
        method: "GET",
      }),
      providesTags: ["TOUR"],
      transformResponse: (res) => res.data,
    }),
  }),
});

export const {
  useAddTourTypeMutation,
  useAddTourMutation,
  useRemoveTourTypeMutation,
  useGetTourTypeQuery,
  useGetAllTourQuery,
  useGetSingleTourQuery,
} = tourApi;
