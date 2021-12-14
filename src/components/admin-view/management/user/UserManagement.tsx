import { Box, Typography, Divider } from '@mui/material'
import { useEffect, useState } from 'react'
import { UserManagementColumns } from '../../../../mockData/AdminPanel'
import GButton from '../../../common/button/GButton'
import GTable from '../../../common/table/GTable'
import '../../admin-view.scss'
import { RootState } from '../../../../store/reducers';
import { useDispatch, useSelector } from 'react-redux'
import { adminActionCreators } from '../../../../store/action-creators'
import { bindActionCreators } from 'redux'
import AddUser from './add-user/AddUser'

interface USerManagementRows {
    username: string;
    email: string;
    userRole: string;
    company: string;
    action: string;
}

export default function UserManagement() {
    const [open, setOpen] = useState(false);
    const [userManagementRows, setUserManagementRows] = useState<USerManagementRows[]>([]);
    const dispatch = useDispatch();
    const { getUsers } = bindActionCreators(adminActionCreators, dispatch)
    const { users } = useSelector((state: RootState) => state.admin);

     
    const handleShowDialog = (status:boolean)=>{
        setOpen(status);
    }

    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        const tempUserManagementRows:USerManagementRows[] =[]
        users.map((user, index) => {
            tempUserManagementRows.push({
                username: user['name'],
                company: "NA",
                email: user['email'],
                userRole: "NA",
                action: "Edit/Remove"
            })
        });
        setUserManagementRows(tempUserManagementRows);
    }, [users])
    

    return (
        <Box >
            <Typography className="heading" variant="h5" component="h2">User Management</Typography>
            <Divider />
            <GButton className='user-management-btn add-button' title='Add User' size='small' onClick={()=>setOpen(true)}/>
            <AddUser open={open} showDialog={handleShowDialog} handleSubmit={()=>{setOpen(false)}}/>
            <GTable rowClicked={(data: any) => { }} rows={userManagementRows} columns={UserManagementColumns} />
        </Box>
    )
}
