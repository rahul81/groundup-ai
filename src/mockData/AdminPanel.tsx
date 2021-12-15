interface Columns {
  id: string;
  label: string;
  align?: string;
  minWidth?: number;
  maxWidth?: number;
}


// User Management Starts //

export const UserManagementColumns: Columns[] = [
  {
    id:"username",
    label: "Username",
  },
  {
    id:"company",
    label: "Company",
  },
  {
    id:"email",
    label: "Email",
  },
  {
    id:"userRole",
    label: "User Role",
  },
  {
    id:"action",
    label: "Action",
  },
]

interface USerManagementRows {
  username: string;
  userRole: string;
  company: string;
  action: string;
}

export const UserManagementRows: USerManagementRows[] = [
  {
    username:"Admin A",
    userRole: "Project Manager",
    company:"Santarli",
    action:"Edit/Remove"
  },
  {
    username:"Admin B",
    userRole: "Project Manager",
    company:"Santarli",
    action:"Edit/Remove"
  },
  {
    username:"Admin C",
    userRole: "SubCon",
    company:"Company XYZ",
    action:"Edit/Remove"
  },
]

//User Management Ends //

//Matrial Management Starts //
export const MaterialColumns: Columns[] = [
  {
    id: "image",
    label: "Image",
  },
  {
    id: "imageCount",
    label: "Image Count",
  },
  {
    id: "materialName",
    label: "Material Name",
  },
  {
    id: "action",
    label: "Action",
  },
];

interface MaterialRows {
  image: string;
  imageCount: number;
  materialName: string;
  action: string;
}

export const MaterialRows: MaterialRows[] = [
  {
    image: "/assets/images/material1.jfif",
    imageCount: 1,
    materialName: "Rebar",
    action: "Edit/Remove",
  },
  {
    image: "/assets/images/material2.jpg",
    imageCount: 1,
    materialName: "Cement",
    action: "Edit/Remove",
  },
  {
    image: "/assets/images/material2.jpg",
    imageCount: 1,
    materialName: "Bucket",
    action: "Edit/Remove",
  },
];

//Material Management Ends //

//Role Management Starts //

export const RoleColumns: Columns[] = [
  {
    id: "role",
    label: "Roles",
  },
  {
    id: "action",
    label: "Action",
  },
];

interface RoleRows {
  role: string;
  action: string;
}

export const RoleRows: RoleRows[] = [
  {
    role: "Project Manager",
    action: "Edit/Remove",
  },
  {
    role: "Deputy PM/Construction manager",
    action: "Edit/Remove",
  },
  {
    role: "Site Engineer/Senior Site Supervisor",
    action: "Edit/Remove",
  },
  {
    role: "Project Manager",
    action: "Edit/Remove",
  },
  {
    role: "Sub Contractor",
    action: "Edit/Remove",
  },
];

// Role Management Ends //

// Activity Management Starts //

export const ActivityColumns: Columns[] = [
  {
    id: "activityName",
    label: "Activity Name",
  },
  {
    id: "hoursTaken",
    label: "Hours Taken",
  },
  {
    id: "action",
    label: "Action",
  },
];

interface ActivityRows {
  activityName: string;
  hoursTaken: string;
  action: string;
}

export const ActivityRows: ActivityRows[] = [
  {
    activityName: "Rebar",
    hoursTaken: "4 hours",
    action: "Edit/Remove",
  },
  {
    activityName: "Rebar",
    hoursTaken: "4 hours",
    action: "Edit/Remove",
  },
];

// Activity Management Ends //

// Maintanance management starts //

export const MaintenanceColumns: Columns[] = [
  {
    id: "contractor",
    label: "Contractor",
  },
  {
    id: "scheduleName",
    label: "Schedule Name",
  },
  {
    id: "scheduleType",
    label: "Schedule Type",
  },
  {
    id: "location",
    label: "Location",
  },
  {
    id: "crane",
    label: "Crane",
  },
  {
    id: "schedule",
    label: "Schedule",
  },
  {
    id: "time",
    label: "Time",
  },
  {
    id: "duration",
    label: "Duration",
  },
  {
    id: "assignedTo",
    label: "Assigned To",
  },
  {
    id: "action",
    label: "Action",
  },
];

interface MaintenanceRows {
  contractor: string;
  scheduleName: string;
  scheduleType: string;
  location: string;
  crane: string;
  schedule: string;
  time: string;
  duration: string;
  assignedTo: string;
  action: string;
}

export const MaintenanceRows: MaintenanceRows[] = [
  {
    contractor: "Zhang Keng Enginering",
    scheduleName: "Maintenance",
    scheduleType: "Planned",
    location: "All Crane",
    crane: "All Crane",
    schedule: "Monthly 9th",
    time: "1:00PM - 2:00PM",
    duration: "1 Hr",
    assignedTo: "Project Manager",
    action: "Edit/Remove",
  },
  {
    contractor: "Zhang Keng Enginering",
    scheduleName: "Maintenance",
    scheduleType: "Planned",
    location: "All Crane",
    crane: "All Crane",
    schedule: "Monthly 9th",
    time: "1:00PM - 2:00PM",
    duration: "1 Hr",
    assignedTo: "Project Manager",
    action: "Edit/Remove",
  },
];

// Maintanance management ends //

// Crane Usage Management Starts //

export const CraneManagementColumns: Columns[] = [
  {
    id: "crane",
    label: "Crane",
  },
  {
    id: "zone",
    label: "Zone",
  },
  {
    id: "bookingHours",
    label: "Booking Hours",
  },
  {
    id: "bookingDays",
    label: "Booking Days",
  },
  {
    id: "action",
    label: "Action",
  },
];

interface CraneUsageRows {
  crane: string;
  bookingHours: string;
  zone: string;
  bookingDays: string;
  action: string;
}

export const CraneUsageRows : CraneUsageRows[] = [
  {
    crane: "Crane A",
    zone: "Zone 1",
    bookingHours: "8Pm -5Pm",
    bookingDays: "Mon,Tue,Wed,Thur,Fri,Sat",
    action: "Edit/Remove",
  },
  {
    crane: "Crane B",
    zone: "Zone 2",
    bookingHours: "8Pm -5Pm",
    bookingDays: "Mon,Tue,Wed,Thur,Fri,Sat",
    action: "Edit/Remove",
  },
  {
    crane: "Crane A",
    zone: "Zone 1",
    bookingHours: "8Pm -5Pm",
    bookingDays: "Mon,Tue,Wed,Thur,Fri,Sat",
    action: "Edit/Remove",
  },
  {
    crane: "Crane C",
    zone: "Zone 2",
    bookingHours: "8Pm -5Pm",
    bookingDays: "Mon,Tue,Wed,Thur,Fri,Sat",
    action: "Edit/Remove",
  },
]

// Crance Usage Management Ends //

// Company Management Starts //

export const CompanyColumns: Columns[] = [
  {
    id: "company",
    label: "Company",
  },
  {
    id: "action",
    label: "Action",
  },
];

interface CompanyRows {
  company: string;
  action: string;
}

export const CompanyRows: CompanyRows[] = [
  {
    company: "Groundup.AI",
    action: "Edit/Remove",
  },
  {
    company: "ABC PVT.LTD",
    action: "Edit/Remove",
  },
];


// Company Management Ends //
