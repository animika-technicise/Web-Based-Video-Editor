import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
import Logo from 'components/Logo';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
      <DrawerHeaderStyled theme={theme} open={open}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Logo />
        </Stack>
      </DrawerHeaderStyled>
      <Button variant="contained">
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={12}>
          <Typography>New Video</Typography>
          <AddIcon />
        </Stack>
      </Button>
    </Stack>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool
};

export default DrawerHeader;
