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
import { UserState } from '../../../../store/reducers/userReducer'

interface UserManagementRowsTypes {
    username: string;
    email: string;
    userRole: string;
    company: string;
    action: string;
}

export default function UserManagement() {
    const [open, setOpen] = useState(false);
    const handleShowDialog = (status: boolean) => {
        setOpen(status);
    }

    const dispatch = useDispatch();
    const { fetchUsers } = bindActionCreators(userActionCreators, dispatch)
    const { users, error, loading }: UserState = useSelector((state: RootState) => state.user);

    const [userManagementRows, setUserManagementRows] = useState<UserManagementRowsTypes[]>([]);
    const tempUserManagementRows: UserManagementRowsTypes[] = []

    useEffect(() => {
        fetchUsers()
    }, [])

    useEffect(() => {
        (users || []).map((user, index) => {
            tempUserManagementRows.push({
                username: user['name'],
                company: "NA",
                email: user['email'],
                userRole: "NA",
                action: "Edit/Remove"
            })
        })
        setUserManagementRows(tempUserManagementRows)
    }, [users])

    return (
        <Box >
            {loading === true ? (<LinearProgress />)
                : loading === false && error !== '' ? <Alert severity="error">{error}</Alert> :
                    <>
                        <Typography className="heading" variant="h5" component="h2">User Management</Typography>
                        <Divider />
                        <GButton className='user-management-btn add-button' title='Add User' size='small' onClick={()=>setOpen(true)}/>
                        <AddUser open={open} showDialog={handleShowDialog} handleSubmit={() => { setOpen(false) }} />
                        <GTable rowClicked={(data: any) => { }} rows={userManagementRows} columns={UserManagementColumns} />
                    </>
            }

        </Box>
    )
}
