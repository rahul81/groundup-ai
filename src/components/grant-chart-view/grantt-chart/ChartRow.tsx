import React from 'react';
import { GranttChartData } from './interface';

interface rowDataInterface {
    rowData: GranttChartData
}

const ChartRow = ({ rowData }: rowDataInterface) => {
    const { id, craneColor, crane, location, liftType, width, color, left } = rowData;
    return (
        id ? <div className="single-row">
            <div className="single-row-left single-row-left-box">
                <div className="single-row-left-text"> <span className="crane-status-color" style={{ backgroundColor: craneColor }}></span>{crane}</div>
                <div className="single-row-left-text">{location}</div>
                {/* <div className="single-row-left-text">{liftType}</div> */}
            </div>
            <div className="single-row-right-box">
                <div className="timing-box" style={{ width: width, backgroundColor: color, left: left }}></div>
            </div>
        </div> : null
    );
}

export default ChartRow;