import { useFormik } from 'formik';
import GDialog from '../../../../common/dialog/GDialog';
import { GFormInput } from '../../../../common/input/GInput';
import { Checkbox, Grid, InputLabel, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Box } from '@mui/system';
import { roleActionCreators } from '../../../../../store/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import '../add-role/add-role.scss';
import { RootState } from '../../../../../store/reducers'
import { CreateRoleState } from '../../../../../store/reducers/roleReducer';
import { fetchRoles } from '../../../../../store/action-creators/roleActionCreators';

interface EditRoleFormFields {
    role: string;
}

interface EditRoleProps {
    open: boolean;
    showDialog: (status: boolean) => void;
    handleSubmit: (data: any) => void;
    accessPermissionTable: any;
    editRoleName: string;
    editRoleId: number;
}

export default function EditRole({ open, showDialog, handleSubmit, accessPermissionTable, editRoleName, editRoleId }: EditRoleProps) {

    const dispatch = useDispatch()
    const { updateRole, fetchRoles } = bindActionCreators(roleActionCreators, dispatch)
    const { createRoleError, createRoleLoading }: CreateRoleState = useSelector((state: RootState) => state.createRole)

    const initialValues: any = {
        role: editRoleName,
        permissions: accessPermissionTable,
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
        onSubmit: async (data) => {

            let priviledges: any = []
            formik.values.permissions.map((permission: any) => {
                priviledges.push({
                    page_name: permission.page_name,
                    access: {
                        approval: permission.access.approval,
                        view: permission.access.view,
                        update: permission.access.update,
                        read: permission.access.read,
                        create: permission.access.create,
                    }
                })
            })

            await updateRole(editRoleId, formik.values.role, priviledges);
            await fetchRoles()
            handleSubmit(data)
        },
    });

    const changePermission = (row: any, field: string) => {
        row[field] = !row[field];
        formik.setValues(formik.values);
    };

    const changeNotificationSettings = (row: any) => {
        row['value'] = !row['value'];
        formik.setValues(formik.values);
    };

    return (
        <GDialog size='large' title="Edit Role" open={open} showDialog={showDialog}>
            <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>

                <GFormInput<EditRoleFormFields> formik={formik} id="role" label="User Role" />
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
                                    key={row.page_name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {row.page_name}
                                    </TableCell>
                                    <TableCell align="right"><Checkbox checked={row.access.create} onChange={() => changePermission(row.access, 'create')} /></TableCell>
                                    <TableCell align="right"><Checkbox checked={row.access.read} onChange={() => changePermission(row.access, 'read')} /></TableCell>
                                    <TableCell align="right"><Checkbox checked={row.access.update} onChange={() => changePermission(row.access, 'update')} /></TableCell>
                                    <TableCell align="right"><Checkbox checked={row.access.view} onChange={() => changePermission(row.access, 'view')} /></TableCell>
                                    <TableCell align="right"><Checkbox checked={row.access.approval} onChange={() => changePermission(row.access, 'approval')} /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </form >
        </GDialog >
    )
}
