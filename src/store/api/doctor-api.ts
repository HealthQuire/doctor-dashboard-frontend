import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IDoctor {
    _id: string;
    userid: string;
    medcentreid: string;
    firstname: string;
    lastname: string;
    fathername?: string;
    age: number;
    year_started: number;
    medservicesids: Array<string>;
    description?: string;
}

export interface IDoctorBody {
    email: string;
    password: string;
    phone?: string;
    avatarURL?: string;
    medcentreid: string;
    firstname: string;
    lastname: string;
    fathername?: string;
    age: number;
    year_started: number;
    medservicesids: Array<string>;
    description?: string;
}

const getAccessToken = (): string => {
    const token = localStorage.getItem('access_token');
    return token ? token : '';
};

export const doctorApi = createApi({
    reducerPath: 'doctorApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL + '/doctor',
        prepareHeaders: (headers) => {
            headers.set('Authorization', getAccessToken());
            return headers;
        }
    }),
    tagTypes: ['DOCTOR'],
    endpoints: (builder) => ({
        getDoctors: builder.query<IDoctor[], void>({
            query: () => '/',
            providesTags: ['DOCTOR']
        }),

        getDoctorById: builder.query({
            query: (id: string) => '/' + id,
            providesTags: ['DOCTOR']
        }),

        postDoctor: builder.mutation<IDoctor, IDoctorBody>({
            query(body: Partial<IDoctor>) {
                return {
                    url: `/`,
                    method: 'POST',
                    body
                };
            },
            invalidatesTags: ['DOCTOR']
        }),

        patchDoctor: builder.mutation<IDoctor, { update: Partial<IDoctor>; id: string }>({
            query(body: { update: Partial<IDoctor>; id: string }) {
                return {
                    url: `/${body.id}`,
                    method: 'PATCH',
                    body: body.update
                };
            },
            invalidatesTags: ['DOCTOR']
        }),

        deleteDoctor: builder.mutation<IDoctor, { id: string }>({
            query(body: { id: string }) {
                return {
                    url: `/${body.id}`,
                    method: 'DELETE'
                };
            },
            invalidatesTags: ['DOCTOR']
        })
    })
});

export const {
    useGetDoctorByIdQuery,
    useGetDoctorsQuery,
    usePatchDoctorMutation,
    usePostDoctorMutation,
    useDeleteDoctorMutation
} = doctorApi;
