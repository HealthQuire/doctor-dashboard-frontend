import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAccessToken } from '../../utils/auth.ts';
import { ITimeCell } from './timecell-api.ts';

export interface IAppointment {
    _id: string;
    timecell: ITimeCell;
    title: string;
    content: string;
    status: number;
}

export interface IAppointmentBody {
    id: string;
    title: string;
    content: string;
    status: number;
}

export const appointmentApi = createApi({
    reducerPath: 'APPOINTMENT_API',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API_URL}/appointment`,
        prepareHeaders: (headers) => {
            headers.set('Authorization', getAccessToken());
            return headers;
        }
    }),
    tagTypes: ['APPOINTMENT'],
    endpoints: (builder) => ({
        getDoctorAppointment: builder.query<IAppointment[], void>({
            query: () => `/${localStorage.getItem('doctorid')}`,
            providesTags: ['APPOINTMENT']
        }),

        getAppointmentById: builder.query({
            query: (id: string) => `/${id}`,
            providesTags: ['APPOINTMENT']
        }),

        postAppointment: builder.mutation<IAppointment, Partial<IAppointmentBody>>({
            query(body: Partial<IAppointment>) {
                return {
                    url: `/`,
                    method: 'POST',
                    body
                };
            },
            invalidatesTags: ['APPOINTMENT']
        }),

        patchAppoitnment: builder.mutation<
            IAppointment,
            { update: Partial<IAppointmentBody>; id: string }
        >({
            query(body: { update: Partial<IAppointmentBody>; id: string }) {
                return {
                    url: `/${body.id}`,
                    method: 'PATCH',
                    body: body.update
                };
            },
            invalidatesTags: ['APPOINTMENT']
        }),

        deleteAppointment: builder.mutation<IAppointment, { id: string }>({
            query(body: { id: string }) {
                return {
                    url: `/${body.id}`,
                    method: 'DELETE'
                };
            },
            invalidatesTags: ['APPOINTMENT']
        })
    })
});

export const {
    useGetAppointmentByIdQuery,
    useGetDoctorAppointmentQuery,
    useDeleteAppointmentMutation,
    usePatchAppoitnmentMutation,
    usePostAppointmentMutation
} = appointmentApi;
