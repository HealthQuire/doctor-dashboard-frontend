import {
    AppointmentForm,
    AppointmentFormButton,
    AppointmentFormInput,
    AppointmentFormLabel,
    AppointmentFormSubtitle,
    AppointmentFormTextArea,
    AppointmentFormTitle,
    AppointmentFormWrapper,
    AppointmentPageWrapper
} from './styles.ts';
import { useParams } from 'react-router-dom';
import { useGetTimeCellByIdQuery } from '../../store/api/timecell-api.ts';
import { Preloader } from '../../components/preloader/preloader.tsx';
import { usePostAppointmentMutation } from '../../store/api/appointment-api.ts';
import { useState } from 'react';

const AppointmentPage = () => {
    const params = useParams();
    const timecellData = useGetTimeCellByIdQuery(params.timecellid ?? '');
    const appointmentHook = usePostAppointmentMutation();
    const [complains, setComplains] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [comment, setComment] = useState('');
    const [direction, setDirection] = useState('');

    const createAppointmentText = () => {
        const text = `
        Medical report ${timecellData.data.date.split('T')[0]}
        
        Patient name: ${timecellData.data.customer.firstname} ${
            timecellData.data.customer.lastname
        } ${timecellData.data.customer.fathername}
        
        Patient birthdate: ${timecellData.data.customer.birthdate}
        
        Patient gender: ${timecellData.data.customer.gender ? 'male' : 'female'}
        
        Doctor name: ${timecellData.data.doctor.firstname} ${timecellData.data.doctor.lastname} ${
            timecellData.data.doctor.fathername
        }
        
        Complains: ${complains}
        
        Diagnosis: ${diagnosis}
        
        Direction: ${direction}
        `;
    };

    return (
        <AppointmentPageWrapper>
            {timecellData.data ? (
                <AppointmentFormWrapper>
                    <AppointmentFormTitle>
                        {timecellData.data.customer.firstname} {timecellData.data.customer.lastname}{' '}
                        {timecellData.data.date.split('T')[0]} - {timecellData.data.time}
                    </AppointmentFormTitle>
                    <AppointmentFormSubtitle>{timecellData.data.comment}</AppointmentFormSubtitle>
                    <AppointmentForm>
                        <h1>Medical report</h1>
                        <AppointmentFormLabel htmlFor="complains">
                            Patient complains:
                        </AppointmentFormLabel>
                        <AppointmentFormTextArea
                            value={complains}
                            name="complains"
                            id="complains"
                            required={true}
                            onChange={(e) => setComplains(e.target.value)}
                            placeholder="Write here..."
                        ></AppointmentFormTextArea>

                        <AppointmentFormLabel htmlFor="diagnosis">
                            Patient diagnosis:
                        </AppointmentFormLabel>
                        <AppointmentFormTextArea
                            value={diagnosis}
                            name="diagnosis"
                            id="diagnosis"
                            required={true}
                            onChange={(e) => setDiagnosis(e.target.value)}
                            placeholder="Write here..."
                        ></AppointmentFormTextArea>

                        <AppointmentFormLabel htmlFor="comment">Comment:</AppointmentFormLabel>
                        <AppointmentFormTextArea
                            value={comment}
                            name="comment"
                            id="comment"
                            required={true}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Write here..."
                        ></AppointmentFormTextArea>

                        <AppointmentFormLabel htmlFor="comment">
                            Direction to patient:
                        </AppointmentFormLabel>
                        <AppointmentFormTextArea
                            value={direction}
                            name="direction"
                            id="direction"
                            required={true}
                            onChange={(e) => setDirection(e.target.value)}
                            placeholder="Write here..."
                        ></AppointmentFormTextArea>

                        <AppointmentFormButton to="/">Create appointment</AppointmentFormButton>
                    </AppointmentForm>
                </AppointmentFormWrapper>
            ) : (
                <Preloader />
            )}
        </AppointmentPageWrapper>
    );
};

export default AppointmentPage;
