import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://northwind.vercel.app/api/' }),
    tagTypes: ['Categories'],
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => 'categories',
            providesTags: ['Categories'],
        }),
        getCategoryDetail: builder.query({
            query: (id) => `categories/${id}`,
        }),
        updateCategory: builder.mutation({
            query: ({ id, ...updatedData }) => ({
                url: `categories/${id}`,
                method: 'PUT',
                body: updatedData,
            }),
            invalidatesTags: ['Categories'],
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `categories/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Categories'],

        }),
        addCategory: builder.mutation({
            query: (newCategory) => ({
                url: 'categories',
                method: 'POST',
                body: newCategory,
            }),
            invalidatesTags: ['Categories'],

        }),
    }),
})

export const { useGetCategoriesQuery, useGetCategoryDetailQuery, useUpdateCategoryMutation, useDeleteCategoryMutation, useAddCategoryMutation } = categoriesApi
