import {
    HomePageWrapper,
    QuickActionsButton,
    QuickActionsButtonIcon,
    QuickActionsButtonText,
    QuickActionsWrapper,
    TodayAppointmentsList,
    TodayAppointmentsTitle,
    TodayAppointmentsWrapper
} from './styles.ts';

const HomePage = () => {
    return (
        <HomePageWrapper>
            <QuickActionsWrapper>
                <QuickActionsButton>
                    <QuickActionsButtonIcon />
                    <QuickActionsButtonText>Расписание</QuickActionsButtonText>
                </QuickActionsButton>
                <QuickActionsButton>
                    <QuickActionsButtonIcon />
                    <QuickActionsButtonText>История обследований</QuickActionsButtonText>
                </QuickActionsButton>
            </QuickActionsWrapper>
            <TodayAppointmentsWrapper>
                <TodayAppointmentsTitle></TodayAppointmentsTitle>
                <TodayAppointmentsList></TodayAppointmentsList>
            </TodayAppointmentsWrapper>
        </HomePageWrapper>
    );
};

export default HomePage;

// HOMEPAGE:
// today customers
// some statistics maybe

// APPOINTMENT:
// just a huge form
// with a lot of fields

// TIMETABLE:
// detailed timetable with all customers of the week

// APPOINTMENT HISTORY
// just all doctor's appointments
