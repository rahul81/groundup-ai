import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import { HOME_BOOKING } from '../../../constants/ContextPaths';
import { useHistory } from 'react-router';

interface TabPanelProps {
    children?: React.ReactNode;
    index?: number;
    setIndex: (index:number)=>void;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function GroundUpTabs(props:TabPanelProps) {

  const tabs = [
    {text: "Booking", id:HOME_BOOKING, icon:<CasesOutlinedIcon />},
    {text: "Maintenance", id:'/home/maintenance', icon:<SettingsApplicationsOutlinedIcon />},
    {text: "Report", id:'/home/report', icon:<AssessmentOutlinedIcon />},
  ];

  const history = useHistory();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    props.setIndex(newValue);
    history.push(tabs[newValue].id);
  };

  return (
    <>
      <Tabs value={props.index} onChange={handleChange} aria-label="GroundUp Tabs" sx={{display: {xs:'none', sm:'block'}}}>
          {(tabs || []).map((item, index)=><Tab key={item.id} label={item.text} {...a11yProps(index)} />)}
      </Tabs>
      <Tabs value={props.index} onChange={handleChange} aria-label="GroundUp Tabs" sx={{display: {xs:'block', sm:'none'}}}>
        {(tabs || []).map((item, index)=><Tab key={item.id} icon={item.icon} aria-label={item.text}/>)}
      </Tabs>
    </>
  );
}
