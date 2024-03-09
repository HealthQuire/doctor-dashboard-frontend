import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IDoctor } from './doctor-api.ts';
import { ICustomer } from './customer-api.ts';

export interface ITimeCell {
    _id: string;
    doctor: IDoctor;
    customer: ICustomer;
    comment?: string;
    date: Date;
    time: string;
}

const url = import.meta.env.VITE_SERVER_URL + '/api/agents';

const getAccessToken = (): string => {
    const token = localStorage.getItem('access_token');
    return token ? token : '';
};

export const agentsApi = createApi({
    reducerPath: 'agentsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: url,
        prepareHeaders: (headers) => {
            headers.set('Authorization', getAccessToken());
            return headers;
        }
    }),
    tagTypes: ['Agent'],
    endpoints: (builder) => ({
        getAgents: builder.query<IAgent[], void>({
            query: () => '/',
            providesTags: ['Agent']
        }),

        getAgentById: builder.query({
            query: (id: string) => '/' + id,
            providesTags: ['Agent']
        }),

        postAgent: builder.mutation<IAgent, Partial<IAgent>>({
            query(body: Partial<IAgent>) {
                return {
                    url: `/`,
                    method: 'POST',
                    body
                };
            },
            invalidatesTags: ['Agent']
        }),

        putAgent: builder.mutation<IAgent, { update: Partial<IAgent>; postId: string }>({
            query(body: { update: Partial<IAgent>; postId: string }) {
                return {
                    url: `/`,
                    method: 'PUT',
                    body
                };
            },
            invalidatesTags: ['Agent']
        }),

        deleteAgent: builder.mutation<IAgent, { postId: string }>({
            query(body: { postId: string }) {
                return {
                    url: `/`,
                    method: 'DELETE',
                    body
                };
            },
            invalidatesTags: ['Agent']
        })
    })
});

export const {
    useGetAgentsQuery,
    useGetAgentByIdQuery,
    usePostAgentMutation,
    usePutAgentMutation,
    useDeleteAgentMutation
} = agentsApi;