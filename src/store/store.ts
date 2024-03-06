import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        // organizations: organizationsSlice,
        // doctors: doctorsSlice,
        // clients: clientsSlice,
        // appointments: appointmentsSlice,
        // managers: managersSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

export default store
