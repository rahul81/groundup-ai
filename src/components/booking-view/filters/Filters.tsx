import { Box } from '@mui/system'
import React from 'react'
import CriteriaFilter from '../criteria-filter/CriteriaFilter'
import StatusFilter from '../status-filter/StatusFilter'

export default function Filters() {
    return (
        <>
            <Box sx={{display: 'flex'}} mb={1}>
                <CriteriaFilter/>
            </Box>
            <Box sx={{display: 'flex'}}>
                <StatusFilter/>
            </Box>
        </>
    )
}
