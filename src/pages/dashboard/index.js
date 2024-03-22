// material-ui
import { Grid, Typography, Stack, Button } from '@mui/material';
import Card from '@mui/material/Card';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import VideocamIcon from '@mui/icons-material/Videocam';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import MicNoneIcon from '@mui/icons-material/MicNone';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import RecentVideo from './recentVideo';
import Box from '@mui/material/Box';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="flex-start" spacing={2}>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item xs={12} sx={{ mb: -2.25 }}>
          <Typography variant="h3" sx={{ fontWeight: 'light' }}>
            Let&apos;s Create Some <strong>Videos!</strong>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ height: '50px', width: '200px' }}>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
              <ContentCutIcon sx={{ color: '#ad80f6', margin: '10px', background: '#deccfb' }} />
              <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                Create Project
              </Typography>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ height: '50px', width: '200px' }}>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
              <VideocamIcon sx={{ color: '#f48eb1', margin: '10px', background: '#fbdde7' }} />
              <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                Record Video
              </Typography>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ height: '50px', width: '200px' }}>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
              <OnlinePredictionIcon sx={{ color: '#00bcd4', margin: '10px', background: '#cbf1f6' }} />
              <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                Go Live
              </Typography>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ height: '50px', width: '200px' }}>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
              <MicNoneIcon sx={{ color: '#ffd351', margin: '10px', background: '#ffe9a8' }} />
              <Typography variant="h5" sx={{ fontWeight: 'light' }}>
                Record Podcast
              </Typography>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="space-between" alignItems="center" rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item>
          <Typography variant="h3" sx={{ fontWeight: 'light' }}>
            My Recent Vidoes
          </Typography>
        </Grid>
        <Grid item>
          <Button endIcon={<KeyboardDoubleArrowRightIcon />}>All Vidoes</Button>
        </Grid>
      </Grid>
      <RecentVideo />
      <Grid container direction="row" justifyContent="space-between" alignItems="center" rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item>
          <Typography variant="h3" sx={{ fontWeight: 'light' }}>
            Templates
          </Typography>
        </Grid>
        <Grid item>
          <Button endIcon={<KeyboardDoubleArrowRightIcon />}>All Templates</Button>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="space-between" alignItems="center" rowSpacing={4.5} columnSpacing={2.75}>
        <Box sx={{ borderStyle: 'dotted', borderRadius: 1, height: 150, width: 200 }}>
          <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={2} sx={{ margin: '30px' }}>
            <DashboardCustomizeIcon />
            <Typography>Create Templates</Typography>
          </Stack>
        </Box>
      </Grid>
    </Stack>
  );
};

export default DashboardDefault;
