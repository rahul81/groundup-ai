import { Box } from '@mui/system'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { GDatePicker } from '../../../common/date-picker/GDatePicker';
import GSelect, { GSelectOption } from '../../../common/select/GSelect';
import { RootState } from '../../../../store/reducers';

export default function CriteriaFilter({
    date,
    setDate,
    crane,
    setCrane
}: any) {



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
            cranes: selectDistinctCranes(data.filter((booking: { crane_id: any }) => booking.crane_id)),
        }
    });

    return (
        <>
            <Box className="dropdown" mr={1}>
                <GDatePicker date={date} onChange={setDate} dateDelete={true} />
            </Box>
            <Box className="dropdown" mr={1}>
                <GSelect id="crane" placeholder="Select Crane" options={reduxState.cranes} onChange={setCrane} value={crane} />
            </Box>
        </>
    )
}
