import { useFormik } from 'formik';
import GDialog from '../../../../common/dialog/GDialog';
import { GFormInput } from '../../../../common/input/GInput';
import RoleFormValidation from './RoleFormValidation'
import { Checkbox, Grid, InputLabel, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Box } from '@mui/system';
import GCheckbox from '../../../../common/checkobx/GCheckbox';
import { priviledgesActionCreators } from '../../../../../store/action-creators';
import { priviledgesState } from '../../../../../store/reducers/priviledgesReducer';
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
}

interface CheckBoxFields {
    id: string;
    label: string;
}


export default function AddRole({ open, showDialog, handleSubmit }: AddRoleProps) {
    const dispatch = useDispatch();
    const { getPriviledges } = bindActionCreators(priviledgesActionCreators, dispatch)
    const { priviledges, priviledgesError, priviledgesLoading }: priviledgesState = useSelector((state: RootState) => state.priviledges);
    
    const [allPriviledges, setallPriviledges] = useState<CheckBoxFields[]>([]);
    const tempPriviledges: CheckBoxFields[] = []
    
    useEffect(() => {
        getPriviledges()
    }, [])
    
    useEffect(() => {
        (priviledges || []).map((priviledge, index) => {
            tempPriviledges.push(
                { id: priviledge['_id'], label: priviledge['name'] }
                )
            })
            setallPriviledges(tempPriviledges)
        }, [priviledges])
        
    const initialValues: any = {
        role: '',
        permissions: [
            {name: 'User Permission', create: true, read: true, update: true, view: true},
            {name: 'Role Management', create: true, read: true, update: true, view: true, approval:true}
        ]
    };
    
    (allPriviledges || []).forEach(item=>{
        initialValues[item.id] = '';
    })

    const formik = useFormik({
        initialValues: initialValues,
        validateOnChange: false,
        validationSchema: RoleFormValidation,
        onSubmit: (data) => {
            handleSubmit(data)
        },
    });

    const changePermission = (row:any, field:string)=>{
        row[field] = !row[field];
        formik.setValues(formik.values);
    };


    return (
        <GDialog size='large'  title="Role Management" open={open} showDialog={showDialog}>
            <form id="request-new-form" className="groundup-form" onSubmit={formik.handleSubmit}>
                <GFormInput<RoleFormFields> formik={formik} id="role" label="User Role" />
                <InputLabel id="notification">Notification</InputLabel>
                <Grid xs={12} container>

                    {allPriviledges.map((item, index) => {
                        return (
                            <Grid xs={6}>
                                <Box className="item">
                                    <GCheckbox
                                        selected={item.id}
                                        formik={formik}
                                        id={item.id}
                                        label={item.label} />
                                </Box>
                            </Grid>
                        )
                    })}

                </Grid>
                <hr/>
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
                        {formik.values.permissions.map((row:any) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right"><Checkbox checked={row.create} onChange={()=>changePermission(row, 'create')}/></TableCell>
                            <TableCell align="right"><Checkbox checked={row.read} onChange={()=>changePermission(row, 'read')}/></TableCell>
                            <TableCell align="right"><Checkbox checked={row.update} onChange={()=>changePermission(row, 'update')}/></TableCell>
                            <TableCell align="right"><Checkbox checked={row.view} onChange={()=>changePermission(row, 'view')}/></TableCell>
                            <TableCell align="right">{row.approval!=undefined && <Checkbox checked={row.approval} onChange={()=>changePermission(row, 'approval')}/>}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </form >
            
        </GDialog >
    )
}
