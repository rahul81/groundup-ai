import { Box, Typography, Divider, Alert, LinearProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../../admin-view.scss'
import { RoleColumns } from '../../../../mockData/AdminPanel';
import GTable from '../../../common/table/GTable';
import GButton from '../../../common/button/GButton';
import AddRole from './add-role/AddRole';
import './role-management.scss'
import { useDispatch, useSelector } from 'react-redux';
import { roleActionCreators } from '../../../../store/action-creators'
import { bindActionCreators } from 'redux';
import { roleState } from '../../../../store/reducers/roleReducer';
import { RootState } from '../../../../store/reducers';

interface RoleRowsTypes {
    role: string;
    action: string;
}

export default function RoleManagement() {
    const [open, setOpen] = useState(false);
    const handleShowDialog = (status: boolean) => {
        setOpen(status);
    }
    const dispatch = useDispatch();
    const { fetchRoles } = bindActionCreators(roleActionCreators, dispatch)
    const { roles, error, loading }: roleState = useSelector((state: RootState) => state.role);

    const [roleManagementRows, setRoleManagementRows] = useState<RoleRowsTypes[]>([]);
    const tempRoleManagementRows: RoleRowsTypes[] = []
    const [accessPermissionTable, setaccessPermissionTable] = useState([]);

    useEffect(() => {
        fetchRoles()
    }, [])

    useEffect(() => {
        (roles || []).map((role, index) => {
            tempRoleManagementRows.push({
                role: role['name'],
                action: "Edit/Remove"
            })
        })
        setRoleManagementRows(tempRoleManagementRows)

        let tempAccessPermissionTable: any = [];
        (roles || []).map((role: any) => {
            tempAccessPermissionTable.push({
                name: role['name'],
                create: true,
                read: true,
                update: false,
                view: true,
                approval: false
            })
        })
        console.log(tempAccessPermissionTable)
        setaccessPermissionTable(tempAccessPermissionTable)
    }, [roles])


    return (
        <Box >
            {loading === true ? (<LinearProgress />)
                : loading === false && error !== '' ? <Alert severity="error">{error}</Alert> :
                    <>
                        <Box className="crane-booking-management-view">
                            <Typography className="heading" variant="h5" component="h2">Role Management</Typography>
                            <Divider />
                            <GButton title='Add Role' size='small' className='role-management-btn add-button' onClick={() => setOpen(true)} />
                            {open && <AddRole accessPermissionTable={accessPermissionTable} open={open} showDialog={handleShowDialog} handleSubmit={() => { setOpen(false) }} />}
                            <GTable rowClicked={(data: any) => { }} rows={roleManagementRows} columns={RoleColumns} />
                        </Box>
                    </>
            }
        </Box>
    )
}
