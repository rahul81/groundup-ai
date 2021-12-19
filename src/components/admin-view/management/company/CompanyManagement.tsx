import { Box, Typography, Divider, LinearProgress, Alert } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../../admin-view.scss'
import { CompanyRows, CompanyColumns } from '../../../../mockData/AdminPanel';
import GTable from '../../../common/table/GTable';
import GButton from '../../../common/button/GButton';
import AddCompany from './add-company/AddCompany';
import './company-management.scss'
import { RootState } from '../../../../store/reducers';
import { companyState } from '../../../../store/reducers/companyReducer';
import { bindActionCreators } from 'redux';
import { companyActionCreators } from '../../../../store/action-creators'
import { useDispatch, useSelector } from 'react-redux';

interface CompanyRowsTypes {
    company: string;
    action: string;
}

export default function CompanyManagement() {
    const [open, setOpen] = useState(false);
    const handleShowDialog = (status: boolean) => {
        setOpen(status);
    }

    const dispatch = useDispatch();
    const { fetchCompany } = bindActionCreators(companyActionCreators, dispatch)
    const { company, error, loading }: companyState = useSelector((state: RootState) => state.company);

    const [companyManagementRows, setcompanyManagementRows] = useState<CompanyRowsTypes[]>([]);
    const tempcompanyManagementRows: CompanyRowsTypes[] = []

    useEffect(() => {
        fetchCompany()
    }, [])

    useEffect(() => {
        (company || []).map((company, index) => {
            tempcompanyManagementRows.push({
                company: company['name'],
                action: "Edit/Remove"
            })
        })
        setcompanyManagementRows(tempcompanyManagementRows)
    }, [company])


    return (
        <Box >
            {loading === true ? (<LinearProgress />)
                : loading === false && error !== '' ? <Alert severity="error">{error}</Alert> :
                    <>
                        <Box className="company-management-view">
                            <Typography className="heading" variant="h5" component="h2">Company Management</Typography>
                            <Divider />
                            <GButton title='Add Comapny' size='small' className='company-management-btn add-button' onClick={() => setOpen(true)} />
                            <AddCompany open={open} showDialog={handleShowDialog} handleSubmit={() => { setOpen(false) }} />
                            <GTable rowClicked={(data: any) => { }} rows={companyManagementRows} columns={CompanyColumns} />
                        </Box>
                    </>
            }
        </Box>

    )
}
