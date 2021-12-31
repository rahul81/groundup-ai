import { Grid } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { craneActionCreator } from '../../../../../store/action-creators';
import { RootState } from '../../../../../store/reducers';
import { CreateCraneState } from '../../../../../store/reducers/craneReducer';
import GFormDatePicker from '../../../../common/date-picker/GDatePicker';
import GDialog from '../../../../common/dialog/GDialog'
import { GFormInput } from '../../../../common/input/GInput';
import { GFormSelectCheckbox } from '../../../../common/select/GSelect'

interface CraneFormFields {
    startTime: string;
    endTime: string;
}

const bookingDays = [
    { text: "Monday", selected: 'monday' },
    { text: "Tuesday", selected: 'tuesday' },
    { text: "Wednesay", selected: 'wednesday' },
    { text: "Thursday", selected: 'thursday' },
    { text: "Friday", selected: 'friday' },
    { text: "Saturday", selected: 'saturday' },
    { text: "Sunday", selected: 'sunday' }
];

export interface AddCraneProps {
    open: boolean;
    showDialog: (status: boolean) => void;
    handleSubmit: (data: any) => void;
}

const AddCrane = ({ open, showDialog, handleSubmit }: AddCraneProps) => {

    const dispatch = useDispatch();
    const { createNewCrane, fetchCrane } = bindActionCreators(craneActionCreator, dispatch)

    const { createCraneLoading, createCraneError }: CreateCraneState = useSelector((state: RootState) => state.createCrane);

    const initialValues: any = {
        startTime: "",
        endTime: "",
        monday: false,
        tuesday: true,
        wednesday: false,
        thursday: true,
        friday: false,
        saturday: false,
        sunday: false,
    };

    const formik = useFormik({
        initialValues: initialValues,
        validateOnChange: false,
        onSubmit: async (data) => {
            handleSubmit(data)
            console.log(data)
            await createNewCrane(formik.values.startTime, formik.values.endTime);
            fetchCrane()
        },
    });

    return (
        <GDialog title="Add Crane" open={open} showDialog={showDialog} >
            <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                <Grid xs={12} container>

                    <Grid xs={12} container>
                        <Grid xs={4}>
                            <GFormSelectCheckbox formik={formik} label='Booking Days' id="bookingdays" options={bookingDays} />
                        </Grid>
                    </Grid>

                    <Grid xs={4}>
                        <GFormDatePicker<CraneFormFields> formik={formik} id="startTime" label="Time Start" timeonly={true} />
                    </Grid>

                    <Grid xs={4}>
                        <GFormDatePicker<CraneFormFields> formik={formik} id="endTime" label="End Start" timeonly={true} />
                    </Grid>

                </Grid>
            </form >
        </GDialog >
    )
}

export default AddCrane
