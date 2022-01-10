import { Box, Typography, Divider, LinearProgress, Alert } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { CraneUsageRows, CraneManagementColumns } from '../../../../mockData/AdminPanel'
import { craneActionCreator } from '../../../../store/action-creators'
import { RootState } from '../../../../store/reducers'
import { GetCraneState } from '../../../../store/reducers/craneReducer'
import GButton from '../../../common/button/GButton'
import GTable from '../../../common/table/GTable'
import '../../admin-view.scss'
import AddCrane from './add-crane/AddCrane'
import './crane-booking.scss'
import EditCrane from './edit-crane/EditCrane'

interface CraneUsageRows {
    crane: string;
    bookingHours: string;
    bookingDays: string;
    action: string;
    _id: number;
}


export default function CraneBookingManagement() {

    const [openEditDialog, setOpenEditDialog] = useState(false);
    const handleShowEditDialog = (status: boolean) => {
        setOpenEditDialog(status);
    }
    const [editCraneData, setEditCraneData] = useState();


    const dispatch = useDispatch();
    const { fetchCrane, removeCrane } = bindActionCreators(craneActionCreator, dispatch)
    const { craneError, cranes, craneLoading }: GetCraneState = useSelector((state: RootState) => state.crane);

    const [open, setOpen] = useState(false);

    const [allCranes, setAllCranes] = useState([]);
    const handleShowDialog = (status: boolean) => {
        setOpen(status);
    }

    useEffect(() => {
        fetchCrane()
    }, [])

    useEffect(() => {
        let tempCrane: any = [];
        (cranes || []).map((crane: any) => {
            tempCrane.push({
                crane: crane['name'],
                bookingHours: `${crane['available_start_time'] + " - " + crane['available_end_time']}`,
                bookingDays: crane['weekdays'].toString(),
                action: "Edit/Remove",
                _id: crane['_id']
            })
        })
        setAllCranes(tempCrane)
    }, [cranes])

    const deleteCrane = async (craneID: any) => {
        await removeCrane(craneID)
        fetchCrane()
    }

    const editClicked = (data: any) => {
        setEditCraneData(data);
        setOpenEditDialog(true);
    }

    return (
        <Box>
            {craneLoading === true ? <LinearProgress /> : craneLoading === false && craneError !== '' ? <Alert severity="error">{craneError}</Alert> :
                <Box className="crane-booking-management-view">
                    <Typography className="heading" variant="h5" component="h2">Crane Booking Management</Typography>
                    <Divider />
                    <GButton title='Add Crane' size='small' className='crane-management-btn add-button' onClick={() => setOpen(true)} />
                    <GTable rowClicked={(data: any) => { }} rows={allCranes} deleteClicked={deleteCrane} editlicked={editClicked} columns={CraneManagementColumns} />
                    {/*  Dialogs */}
                    <AddCrane open={open} showDialog={handleShowDialog} handleSubmit={() => { setOpen(false) }} />
                    {openEditDialog && <EditCrane editCraneData={editCraneData} open={openEditDialog} showDialog={handleShowEditDialog} handleSubmit={() => { setOpenEditDialog(false) }} />}

                </Box>}
        </Box>
    )
}
