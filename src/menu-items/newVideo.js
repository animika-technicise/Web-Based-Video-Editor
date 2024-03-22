// material-ui
import { Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// ==============================|| MAIN LOGO ||============================== //

const newVideo = () => {
  return (
    <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={2}>
      <Button variant="contained" endIcon={<AddIcon />}>
        New Video
      </Button>
    </Stack>
  );
};

export default newVideo;
