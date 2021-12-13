import { Box, Typography, Divider } from '@mui/material'
import { useEffect } from 'react'
import { UserManagementColumns } from '../../../../mockData/AdminPanel'
import GButton from '../../../common/button/GButton'
import GTable from '../../../common/table/GTable'
import '../../admin-view.scss'
import { RootState } from '../../../../store/reducers';
import { useDispatch, useSelector } from 'react-redux'
import { adminActionCreators } from '../../../../store/action-creators'
import { bindActionCreators } from 'redux'

interface USerManagementRows {
    username: string;
    email: string;
    userRole: string;
    company: string;
    action: string;
}

export default function UserManagement() {
    const dispatch = useDispatch();
    const { getUsers } = bindActionCreators(adminActionCreators, dispatch)
    const { users } = useSelector((state: RootState) => state.admin);
    const UserManagementRows: USerManagementRows[] = []

    useEffect(() => {
        getUsers()
        return () => {
        }
    }, [])


    users.map((user, index) => {
        UserManagementRows.push({
            username: user['name'],
            company: "NA",
            email: user['email'],
            userRole: "NA",
            action: "Edit/Remove"
        })
    })

    return (
        <Box className="crane-booking-management-view">
            <Typography className="heading" variant="h5" component="h2">User Management</Typography>
            <Divider />
            <GButton title='Add User' size='small' style={{ display: 'block', margin: '10px 0' }} />
            <GTable rowClicked={(data: any) => { }} rows={UserManagementRows} columns={UserManagementColumns} />
        </Box>
    )
}
