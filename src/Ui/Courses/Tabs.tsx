import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PythonAllSlider from './Python/PythonAllSlider';
import ExcelAllSlider from './MicrosoftExcel/ExcelAllSlider';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function AllTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
				>
					<Tab label="python" {...a11yProps(0)} />
					<Tab label="microsoft excel" {...a11yProps(1)} />
					<Tab label="web development" {...a11yProps(2)} />
					<Tab label="java script" {...a11yProps(3)} />
					<Tab label="data science" {...a11yProps(4)} />
					<Tab label="amazon aws" {...a11yProps(5)} />
				</Tabs>
			</Box>
			<CustomTabPanel value={value} index={0}>
				<PythonAllSlider />
			</CustomTabPanel>
			<CustomTabPanel value={value} index={1}>
				<ExcelAllSlider />
			</CustomTabPanel>
			<CustomTabPanel value={value} index={2}>
				<PythonAllSlider />
			</CustomTabPanel>
			<CustomTabPanel value={value} index={3}>
				<ExcelAllSlider />
			</CustomTabPanel>
			<CustomTabPanel value={value} index={4}>
				<PythonAllSlider />
			</CustomTabPanel>
			<CustomTabPanel value={value} index={5}>
				<ExcelAllSlider />
			</CustomTabPanel>
		</Box>
	);
}
