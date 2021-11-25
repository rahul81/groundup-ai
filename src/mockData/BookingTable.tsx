import { grey } from "@mui/material/colors";
import { maxWidth } from "@mui/system";
import GButton from "../components/common/button/GButton";

interface Column {
  id: "date" | "timeStart" | "timeEnd" | "zone" | "crane" | "taskType" | "status";
  label: string;
  minWidth?: number;
  align?: "right" | "left";
  format?: (value: number) => string;
}

export const columns: Column[] = [
  { id: "date", label: "Date", minWidth:120 },
  { id: "timeStart", label: "Time Start", align: "left"},
  {
    id: "timeEnd",
    label: "Time End",
    align: "left",
  },
  {
    id: "timeEnd",
    label: "Time End",
    align: "left",
  },
  {
    id: "zone",
    label: "Zone",
    align: "left",
  },
  {
    id: "crane",
    label: "Crane",
    align: "left",
  },
  {
    id: "taskType",
    label: "Task Type",
    align: "left",
  },
  {
    id: "status",
    label: "Status",
    align: "left",
  },

];

interface Data {
  date: string;
  timeStart: string;
  timeEnd: string;
  zone: string;
  crane: string;
  taskType: string;
  status: JSX.Element;
}

function createData(
  date: string,
  timeStart: string,
  timeEnd: string,
  zone: string,
  crane: string,
  taskType: string,
  status: JSX.Element
): Data {
  return { date, timeStart, timeEnd, zone, crane, taskType, status };
}

export const rows = [
  createData("22 Jun 2021", "03:00 PM", "05:00 PM", "Location A", "Crane 2", "Carrying Loads", <GButton  title='pending' size='small' sx={{width:'100%', backgroundColor:grey[400], textTransform:'capitalize'}} />),
  createData("21 Jun 2021", "03:00 PM", "05:00 PM", "Location E", "Crane 4", "Carrying Loads", <GButton  title='pending' size='small' sx={{width:'100%', backgroundColor:grey[400], textTransform:'capitalize'}} />),
  createData("22 Jun 2021", "03:00 PM", "05:00 PM", "Location A", "Crane 2", "Carrying Loads", <GButton  title='pending' size='small' sx={{width:'100%', backgroundColor:grey[400], textTransform:'capitalize'}} />),
  createData("24 Jun 2021", "03:00 PM", "05:00 PM", "Location A", "Crane 3", "Carrying Loads", <GButton  title='scheduled' color='primary' size='small' sx={{width:'100%', textTransform:'capitalize'}} />),
  createData("22 Jun 2021", "03:00 PM", "05:00 PM", "Location B", "Crane 2", "Carrying Loads", <GButton  title='scheduled' color='primary' size='small' sx={{width:'100%', textTransform:'capitalize'}} />),
  createData("22 Jun 2021", "03:00 PM", "05:00 PM", "Location A", "Crane 4", "Carrying Loads", <GButton  title='rejected' color='error' size='small' sx={{width:'100%', textTransform:'capitalize'}} />),
  createData("23 Jun 2021", "03:00 PM", "05:00 PM", "Location D", "Crane 2", "Carrying Loads", <GButton  title='pending' size='small' sx={{width:'100%', backgroundColor:grey[400], textTransform:'capitalize'}} />),
  createData("22 Jun 2021", "03:00 PM", "05:00 PM", "Location B", "Crane 4", "Carrying Loads", <GButton  title='pending' size='small' sx={{width:'100%', backgroundColor:grey[400], textTransform:'capitalize'}} />),
  createData("22 Jun 2021", "03:00 PM", "05:00 PM", "Location C", "Crane 2", "Carrying Loads", <GButton  title='pending' size='small' sx={{width:'100%', backgroundColor:grey[400], textTransform:'capitalize'}} />),
  createData("22 Jun 2021", "03:00 PM", "05:00 PM", "Location A", "Crane 1", "Carrying Loads", <GButton  title='pending' size='small' sx={{width:'100%', backgroundColor:grey[400], textTransform:'capitalize'}} />),
];
