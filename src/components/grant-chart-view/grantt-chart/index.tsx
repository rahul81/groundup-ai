import React from 'react';
import './index.scss';
import GToggleButtonGroup, { GToggleButtonOption } from '../../common/toggle-group/GToggleButtonGroup';
import { Typography } from '@mui/material';

interface GranttChartData {
    crane: string;
    location: string;
    liftType: string;
    width: string;
    left: string;
    color: string;
    craneColor: string;
}

const GranttChart = () => {

    const [formats, setFormats] = React.useState<string[]>(() => []);
    const options: GToggleButtonOption[] = [
        { value: "day", label: "Day" },
        { value: "week", label: "Week" }
    ];

    const leftColumns: string[] = ["Crane", "Location", "Lift Type"];

    const rightColumns: string[] = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"]

    const data: GranttChartData[] = [{
        crane: "CraneA",
        location: "Zone A",
        liftType: "Install Framework",
        width: "12%",
        left: "15%",
        color: "#3478fc",
        craneColor: "#ff8d8d"
    },
    {
        crane: "CraneA",
        location: "Zone A",
        liftType: "Loading/Unloading",
        width: "8%",
        left: "27%",
        color: "#b7b7b7",
        craneColor: "#ff8d8d"
    },
    {
        crane: "CraneB",
        location: "Zone A",
        liftType: "Maintenance",
        width: "8%",
        left: "35%",
        color: "#8d3ed4",
        craneColor: "#8dabff"
    },
    {
        crane: "CraneB",
        location: "Zone A",
        liftType: "Loading/Unloading",
        width: "2%",
        left: "43%",
        color: "#b7b7b7",
        craneColor: "#8dabff"
    },
    {
        crane: "CraneB",
        location: "Zone A",
        liftType: "Install Framework",
        width: "6%",
        left: "44%",
        color: "#b7b7b7",
        craneColor: "#8dabff"
    },
    {
        crane: "Crane A",
        location: "Zone A",
        liftType: "Concreting/Casting",
        width: "19%",
        left: "47%",
        color: "#b7b7b7",
        craneColor: "#8dabff"
    },
    {
        crane: "CraneB",
        location: "Zone A",
        liftType: "Loading/Unloading",
        width: "4%",
        left: "72%",
        color: "#b7b7b7",
        craneColor: "#8dabff"
    },
    {
        crane: "CraneB",
        location: "Zone A",
        liftType: "Loading/Unloading",
        width: "4%",
        left: "88%",
        color: "#b7b7b7",
        craneColor: "#8dabff"
    }]
    return <>
        <Typography variant="h4" className="grantt-chart-heading">All Cranes</Typography>
        <div className="grantt-chart-header-container">
            <div className="status-container">
                <span className="status-text"><span className="status-color" style={{ backgroundColor: "#b7b7b7" }}></span>Pending</span>
                <span className="status-text"><span className="status-color" style={{ backgroundColor: "#3478fc" }}></span>Scheduled</span>
                <span className="status-text"><span className="status-color" style={{ backgroundColor: "#8d3ed4" }}></span>Maintenance Schedule</span>
            </div>
            <div>
                <GToggleButtonGroup formats={formats} setFormats={setFormats} options={options} />
            </div>
        </div>
        <div className="grantt-chart-main-container">
            <div className="single-row">
                <div className="single-row-left">
                    {
                        leftColumns.map(leftColumn =>
                            <div className="single-row-left-text">{leftColumn}</div>
                        )
                    }
                </div>
                <div className="single-row-right">
                    {
                        rightColumns.map(rightColumn =>
                            <div>{rightColumn}</div>
                        )
                    }
                </div>
            </div>
            {
                data.map(a =>
                    <div className="single-row">
                        <div className="single-row-left single-row-left-box">
                            <div className="single-row-left-text"> <span className="crane-status-color" style={{ backgroundColor: a.craneColor }}></span>{a.crane}</div>
                            <div className="single-row-left-text">{a.location}</div>
                            <div className="single-row-left-text">{a.liftType}</div>
                        </div>
                        <div className="single-row-right-box">
                            <div className="timing-box" style={{ width: a.width, backgroundColor: a.color, left: a.left }}></div>
                        </div>
                    </div>
                )
            }
        </div>
    </>

}

export default GranttChart;