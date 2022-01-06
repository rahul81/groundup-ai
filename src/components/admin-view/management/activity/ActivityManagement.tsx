import { Box, Typography, Divider, Alert, LinearProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import { ActivityColumns } from '../../../../mockData/AdminPanel'
import GButton from '../../../common/button/GButton'
import GTable from '../../../common/table/GTable'
import '../../admin-view.scss'
import AddActivity from './add-activity/AddActivity'
import './activity-management.scss'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { GetActivityState } from '../../../../store/reducers/activityReducer'
import { RootState } from '../../../../store/reducers'
import { activityActionCreator } from '../../../../store/action-creators'
import EditActivity from './edit-activity/EditActivity'

export interface liftTypeData {
    _id: number;
    activityName: string,
    hoursTaken: string,
    action: string,
}
export default function ActivityManagement() {
    const [open, setOpen] = useState(false);
    const handleShowDialog = (status: boolean) => {
        setOpen(status);
    }

    const [openEditDialog, setOpenEditDialog] = useState(false);
    const handleShowEditDialog = (status: boolean) => {
        setOpenEditDialog(status);
    }

    const [allLiftTypes, setAllLiftTypes] = useState<liftTypeData[]>([]);
    const [editAcivityName, setEditAcivityName] = useState<liftTypeData>();

    const dispatch = useDispatch();
    const { fetchLiftTypes, removeLiftType } = bindActionCreators(activityActionCreator, dispatch)
    const { liftTypes, liftTypesLoading, liftTypesError }: GetActivityState = useSelector((state: RootState) => state.activity);

    useEffect(() => {
        fetchLiftTypes()
    }, [])

    useEffect(() => {
        console.log(liftTypes)
        let tempLiftTypes: liftTypeData[] = [];
        (liftTypes || []).map((liftType, index) => {
            tempLiftTypes.push({
                _id: liftType['_id'],
                activityName: liftType['name'],
                hoursTaken: "4 hours",
                action: "Edit/Remove",
            })
        })
        setAllLiftTypes(tempLiftTypes);

    }, [liftTypes])

    const activityDelete = async (activityId: number) => {
        await removeLiftType(activityId)
        fetchLiftTypes()
    }

    const editActivityDialog = (activityData: liftTypeData) => {
        setOpenEditDialog(true);
        setEditAcivityName(activityData);
    }

    return (
        <Box >
            {liftTypesLoading === true ? (<LinearProgress />)
                : liftTypesLoading === false && liftTypesError !== '' ? <Alert severity="error">{liftTypesError}</Alert>
                    :
                    < Box className="activity-management-view" >
                        <Typography className="heading" variant="h5" component="h2">Activity Management</Typography>
                        <Divider />
                        <GButton title='Add Activity' size='small' className='activity-management-btn add-button' onClick={() => setOpen(true)} />
                        <AddActivity open={open} showDialog={handleShowDialog} handleSubmit={() => { setOpen(false) }} />
                        <GTable deleteClicked={activityDelete} editlicked={editActivityDialog} rows={allLiftTypes} columns={ActivityColumns} />
                        {/* Dialogs */}
                        {openEditDialog && <EditActivity activityData={editAcivityName} open={openEditDialog} showDialog={handleShowEditDialog} handleSubmit={() => { setOpenEditDialog(false) }} />}
                    </Box >
            }
        </Box >
    )
}
