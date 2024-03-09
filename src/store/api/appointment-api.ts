import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAccessToken } from '../../utils/auth.ts';

export interface IAppointment {
    _id: mongoose.Types.ObjectId;
    timecell: ITimeCell;
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

        postAppointment: builder.mutation<IAppointment, Partial<IAppointment>>({
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
            { update: Partial<IAppointment>; id: string }
        >({
            query(body: { update: Partial<IAppointment>; id: string }) {
                return {
                    url: `/${body.id}`,
                    method: 'PATCH',
                    update: body.update
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
