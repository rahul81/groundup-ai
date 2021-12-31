import { useFormik } from 'formik';
import GDialog from '../../../../common/dialog/GDialog';
import { GFormInput } from '../../../../common/input/GInput';
import RoleFormValidation from './RoleFormValidation'
import { Checkbox, Grid, InputLabel, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Box } from '@mui/system';
import { roleActionCreators } from '../../../../../store/action-creators';
import { roleState } from '../../../../../store/reducers/roleReducer';
import { RootState } from '../../../../../store/reducers';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './add-role.scss';

interface RoleFormFields {
    role: string;
}

interface AddRoleProps {
    open: boolean;
    showDialog: (status: boolean) => void;
    handleSubmit: (data: any) => void;
    roles: any;
}

interface CheckBoxFields {
    id: string;
    label: string;
}

const notificationSettings: CheckBoxFields[] = [
    { id: '421422221', label: "New Booking" },
    { id: '142222222', label: "Update Booking" },
    { id: '214t32312', label: "Cancelled Booking" },
    { id: '421412222', label: "Reschedule Booking" },
    { id: '325423523', label: "Approved/ Rejected Booking" },
    { id: '412432432', label: "Maintenance" },
    { id: '523342523', label: "Machine Idling" }
]

export default function AddRole({ open, showDialog, handleSubmit, roles }: AddRoleProps) {
    const dispatch = useDispatch();
    const { fetchRoles } = bindActionCreators(roleActionCreators, dispatch)

    useEffect(() => {
        console.log(roles)
    }, [])

    const initialValues: any = {
        role: '',
        permissions: [
            { name: 'User Permission', create: true, read: true, update: true, view: true },
            { name: 'Role Management', create: true, read: true, update: false, view: true, approval: true }
        ],
        notificationSetting: [
            { name: 'Machine Idling', value: true },
            { name: 'Maintenance', value: true },
            { name: 'Approved/ Rejected Booking', value: true },
            { name: 'Reschedule Booking', value: false },
            { name: 'Cancelled Booking', value: false },
            { name: 'Update Booking', value: false },
            { name: 'New Booking', value: true }
        ]
    };

    const formik = useFormik({
        initialValues: initialValues,
        validateOnChange: false,
        validationSchema: RoleFormValidation,
        onSubmit: (data) => {
            handleSubmit(data)
        },
    });

    const changePermission = (row: any, field: string) => {
        console.log(row)
        row[field] = !row[field];
        formik.setValues(formik.values);
    };

    const changeNotificationSettings = (row: any) => {
        console.log(row)
        row['value'] = !row['value'];
        formik.setValues(formik.values);
    };

    return (
        <GDialog size='large' title="Role Management" open={open} showDialog={showDialog}>
            <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                <GFormInput<RoleFormFields> formik={formik} id="role" label="User Role" />
                <InputLabel id="notification">Notification</InputLabel>
                <Grid xs={12} container>
                    {(formik.values.notificationSetting || []).map((item: any) => {
                        return (
                            <Grid xs={6}>
                                <Box className="item g-checkbox">
                                    <Checkbox checked={item.value} onChange={() => changeNotificationSettings(item)} />
                                    <Typography variant="body1" >{item.name}</Typography>
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid>
                <hr />
                <Typography align='left' variant="h6" component='div' mb={2}>Access Permission</Typography>
                <TableContainer component={Paper} className='permission-container'>
                    <Table size="small" aria-label="permission table" className='permission-table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>Pages</TableCell>
                                <TableCell align="right">Create</TableCell>
                                <TableCell align="right">Read</TableCell>
                                <TableCell align="right">Update</TableCell>
                                <TableCell align="right">View</TableCell>
                                <TableCell align="right">Approval</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {formik.values.permissions.map((row: any) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right"><Checkbox checked={row.create} onChange={() => changePermission(row, 'create')} /></TableCell>
                                    <TableCell align="right"><Checkbox checked={row.read} onChange={() => changePermission(row, 'read')} /></TableCell>
                                    <TableCell align="right"><Checkbox checked={row.update} onChange={() => changePermission(row, 'update')} /></TableCell>
                                    <TableCell align="right"><Checkbox checked={row.view} onChange={() => changePermission(row, 'view')} /></TableCell>
                                    <TableCell align="right">{row.approval != undefined && <Checkbox checked={row.approval} onChange={() => changePermission(row, 'approval')} />}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </form >
        </GDialog >
    )
}
