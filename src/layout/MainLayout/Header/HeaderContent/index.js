// material-ui
import { Box, useMediaQuery } from '@mui/material';
import Stack from '@mui/material/Stack';

// project import
import Search from './Search';
import Profile from './Profile';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Button from '@mui/material/Button';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}
      <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
        <Button variant="contained" endIcon={<PersonAddAltIcon />} sx={{ bgcolor: '#cccccc', color: '#555555' }}>
          Invite
        </Button>

        <Button variant="contained" endIcon={<ElectricBoltIcon sx={{ color: '#ffa219' }} />} sx={{ bgcolor: '#ffd599', color: '#555555' }}>
          Upgrade
        </Button>
        <HelpOutlineIcon />

        <NotificationsNoneOutlinedIcon />
        {!matchesXs && <Profile />}
      </Stack>
    </>
  );
};

export default HeaderContent;
