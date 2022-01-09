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
import EditRole from './edit-role/EditRole';
import { number } from 'yup';

interface RoleRowsTypes {
    role: string;
    priviledges: [];
    _id: number,
    action: string;
}

export default function RoleManagement() {
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const handleShowEditDialog = (status: boolean) => {
        setOpenEditDialog(status);
    }

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
    const [addRoleaccessPermissionTable, setAddRoleAccessPermissionTable] = useState([]);
    const [editRoleAccessPermissionTable, setEditRoleAccessPermissionTable] = useState([]);
    const [editRoleName, setEditRoleName] = useState('');
    const [editRoleId, setEditRoleId] = useState<any>();


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
                priviledges : role['priviledges'],
                _id: role['_id'],
                action: "Edit/Remove"
            })
        })
        setRoleManagementRows(tempRoleManagementRows)

        let tempAccessPermissionTable: any = [];
        (Pages || []).map((page: any) => {
            tempAccessPermissionTable.push({
                name: page['page_name'],
                approval: false,
                view: false,
                update: false,
                read: true,
                create: false,
            })
        })
        setAddRoleAccessPermissionTable(tempAccessPermissionTable)
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
    const editlicked = async (rowData: any) => {
        setOpenEditDialog(true)
        setEditRoleName(rowData['role'])
        setEditRoleId(rowData['_id'])
        setEditRoleAccessPermissionTable(rowData['priviledges'])
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
                            <GTable rowClicked={(data: any) => { }} rows={roleManagementRows} columns={RoleColumns} editlicked={editlicked} deleteClicked={deleteClicked} />

                             {/* Dialogs */}
                            {open && <AddRole accessPermissionTable={addRoleaccessPermissionTable} open={open} showDialog={handleShowDialog} handleSubmit={() => { setOpen(false) }} />}
                            {openEditDialog && <EditRole editRoleId={editRoleId} editRoleName={editRoleName} accessPermissionTable={editRoleAccessPermissionTable} open={openEditDialog} showDialog={handleShowEditDialog} handleSubmit={() => { setOpenEditDialog(false) }} />}
                        </Box>
                    </>
            }
        </Box>
    )
}
