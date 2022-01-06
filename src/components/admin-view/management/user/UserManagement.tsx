import { Box, Typography, Divider, Alert } from '@mui/material'
import { useEffect, useState } from 'react'
import { UserManagementColumns } from '../../../../mockData/AdminPanel'
import GButton from '../../../common/button/GButton'
import GTable from '../../../common/table/GTable'
import '../../admin-view.scss'
import { RootState } from '../../../../store/reducers';
import { useDispatch, useSelector } from 'react-redux'
import { userActionCreators } from '../../../../store/action-creators'
import { bindActionCreators } from 'redux'
import AddUser from './add-user/AddUser'
import LinearProgress from '@mui/material/LinearProgress';
import { UserState, DeleteUserState } from '../../../../store/reducers/userReducer'
import EditUser from './edit-user/EditUser'

export interface UserManagementRowsTypes {
    username: string;
    email: string;
    userRole: string;
    company: string;
    action: string;
    _id: number;
}

export default function UserManagement() {
    const [open, setOpen] = useState(false);
    const handleShowDialog = (status: boolean) => {
        setOpen(status);
    }

    const [openEditDialog, setOpenEditDialog] = useState(false);
    const handleShowEditDialog = (status: boolean) => {
        setOpenEditDialog(status);
    }

    const dispatch = useDispatch();
    const { fetchUsers } = bindActionCreators(userActionCreators, dispatch)
    const { users, error, loading }: UserState = useSelector((state: RootState) => state.user);

    const { removeUser } = bindActionCreators(userActionCreators, dispatch)
    const { deleteError, deleteLoading }: DeleteUserState = useSelector((state: RootState) => state.removeUser);

    const [editUserData, setEditUserData] = useState<UserManagementRowsTypes>();
    const [userManagementRows, setUserManagementRows] = useState<UserManagementRowsTypes[]>([]);
    const tempUserManagementRows: UserManagementRowsTypes[] = []

    useEffect(() => {
        fetchUsers()
    }, [])

    useEffect(() => {
        (users || []).map((user, index) => {
            tempUserManagementRows.push({
                username: user['name'],
                company: user['company']['name'],
                email: user['email'],
                userRole: user['role'][0]['name'],
                action: "Edit/Remove",
                _id: user['_id']
            })
        })
        setUserManagementRows(tempUserManagementRows)
    }, [users])

    const rowClicked = (data: UserManagementRowsTypes) => {
        setEditUserData(data);
        setOpenEditDialog(true);
    }

    const deleteUser = async (userID: number) => {
        await removeUser(userID)
        fetchUsers()
    }

    return (
        <Box >
            {loading === true ? (<LinearProgress />)
                : loading === false && error !== '' ? <Alert severity="error">{error}</Alert> :
                    <>
                        <Typography className="heading" variant="h5" component="h2">User Management</Typography>
                        <Divider />
                        <GButton className='user-management-btn add-button' title='Add User' size='small' onClick={() => setOpen(true)} />
                        <GTable editlicked={rowClicked} deleteClicked={deleteUser} rowClicked={(data: any) => { }} rows={userManagementRows} columns={UserManagementColumns} />
                        {/* Dialogs */}
                        <AddUser open={open} showDialog={handleShowDialog} handleSubmit={() => { setOpen(false) }} />
                        {openEditDialog && <EditUser editUserData={editUserData} open={openEditDialog} showDialog={handleShowEditDialog} handleSubmit={() => { setOpenEditDialog(false) }} />}
                    </>
            }
        </Box>
    )
}
