import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';

function MyDataPicker({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDateTimePicker orientation="landscape" />
    </LocalizationProvider>
  );
}
export default MyDataPicker

