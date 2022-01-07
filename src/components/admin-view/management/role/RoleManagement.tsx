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
import { DeleteRoleState, roleState } from '../../../../store/reducers/roleReducer';
import { RootState } from '../../../../store/reducers';
import { Pages } from '../../../../mockData/Pages';
import Notification from '../../../common/notification/Notification';

interface RoleRowsTypes {
    role: string;
    _id: number,
    action: string;
}

export default function RoleManagement() {
    const [open, setOpen] = useState(false);
    const handleShowDialog = (status: boolean) => {
        setOpen(status);
    }
    const dispatch = useDispatch();
    const { fetchRoles, removeRole } = bindActionCreators(roleActionCreators, dispatch)
    const { roles, error, loading }: roleState = useSelector((state: RootState) => state.role);
    const { deleteRoleError, deleteRoleLoading }: DeleteRoleState = useSelector((state: RootState) => state.deleteRole);

    const [roleManagementRows, setRoleManagementRows] = useState<RoleRowsTypes[]>([]);
    const tempRoleManagementRows: RoleRowsTypes[] = []
    const [accessPermissionTable, setaccessPermissionTable] = useState([]);

    const { setNotification } = Notification()
    const craneNotification = (message: string) => {
        setNotification(message)
    }

    useEffect(() => {
        fetchRoles()
    }, [])

    useEffect(() => {

        (roles || []).map((role, index) => {
            tempRoleManagementRows.push({
                role: role['name'],
                _id: role['_id'],
                action: "Edit/Remove"
            })
        })
        setRoleManagementRows(tempRoleManagementRows)

        let tempAccessPermissionTable: any = [];
        (Pages || []).map((page: any) => {
            tempAccessPermissionTable.push({
                name: page['page_name'],
                create: true,
                read: true,
                update: false,
                view: true,
                approval: false
            })
        })
        setaccessPermissionTable(tempAccessPermissionTable)
    }, [roles])

    const deleteClicked = async (roleID: any) => {
        await removeRole(roleID);
        await fetchRoles()

        // if (deleteRoleError === "" && deleteRoleLoading === false) {
        //     craneNotification('Role deleted successfuly')
        //     await fetchRoles()
        // } else {
        //     craneNotification('Something went wrong')
        // }
    }

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
                            <GTable rowClicked={(data: any) => { }} rows={roleManagementRows} columns={RoleColumns} deleteClicked={deleteClicked} />
                        </Box>
                    </>
            }
        </Box>
    )
}
