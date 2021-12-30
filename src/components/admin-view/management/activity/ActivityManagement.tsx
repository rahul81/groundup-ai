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
import { ActivityState } from '../../../../store/reducers/activityReducer'
import { RootState } from '../../../../store/reducers'
import { activityActionCreator } from '../../../../store/action-creators'

export default function ActivityManagement() {

    interface liftTypeData {
        _id: number;
        activityName: string,
        hoursTaken: string,
        action: string,
    }

    const [open, setOpen] = useState(false);
    const handleShowDialog = (status: boolean) => {
        setOpen(status);
    }

    const [allLiftTypes, setAllLiftTypes] = useState<liftTypeData[]>([]);

    const dispatch = useDispatch();
    const { fetchLiftTypes } = bindActionCreators(activityActionCreator, dispatch)
    const { liftTypes, liftTypesLoading, liftTypesError }: ActivityState = useSelector((state: RootState) => state.activity);

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
                        <GTable rowClicked={(data: any) => { }} rows={allLiftTypes} columns={ActivityColumns} />
                    </Box >
            }
        </Box >
    )
}
