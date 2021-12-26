import { SelectChangeEvent } from '@mui/material';
import { Box } from '@mui/system'
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { GDatePicker } from '../../common/date-picker/GDatePicker';
import GSelect, { GSelectOption } from '../../common/select/GSelect';

export default function CriteriaFilter(
    {
        date,
        setDate,
        crane,
        setCrane
    }: any
) {


    const selectDistinctCranes = (items: any[]) => {
        let lookup: any = {};
        let result: GSelectOption[] = [];

        for (let item, i = 0; item = items[i++];) {
            let name = item.crane_id.name;

            if (!(name in lookup)) {
                lookup[name] = 1;
                result.push({
                    key: name, value: name
                });
            }
        }
        return result;
    }

    const reduxState = useSelector((state: RootState) => {
        const { bookings: { data = [] } = {} } = state || {};
        return {
            bookings: data,
            cranes: selectDistinctCranes(data.filter((booking: { crane_id: any }) => booking.crane_id))
        }
    });

    return (
        <>
            <Box sx={{ display: 'flex' }} mb={1}>
                <Box className="dropdown" mr={1}>
                    <GDatePicker date={date} onChange={setDate} dateDelete={true} />
                </Box>
                <Box className="dropdown" mr={1}>
                    <GSelect id="Crane" placeholder="Select Crane" options={reduxState.cranes} onChange={setCrane} value={crane} />
                </Box>
            </Box>
        </>
    )
}
