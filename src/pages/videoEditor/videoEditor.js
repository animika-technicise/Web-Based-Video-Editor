import * as React from 'react';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Slider from '@mui/material/Slider';
import Chip from '@mui/material/Chip';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import RefreshIcon from '@mui/icons-material/Refresh';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import image from '../../assets/images/video/editVideo.jpg';
import FastForwardIcon from '@mui/icons-material/FastForward';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import Crop169Icon from '@mui/icons-material/Crop169';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import AddIcon from '@mui/icons-material/Add';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';

const names = ['Widescreen(16:9)', 'Square(1:1)', 'Vertical(9:16)', 'Standard(4:3)'];
const time = ['10', '24', '25', '30', '40', '50'];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
  };
}

export default function MiniDrawer() {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [frameTime, setFrameTime] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const handleTime = (event) => {
    const {
      target: { value }
    } = event;
    setFrameTime(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Button variant="contained" endIcon={<DoneIcon />} sx={{ alignSelf: 'flex-end', ml: 110, mb: 2 }}>
          Done
        </Button>
        <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={2}>
          <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
            <Grid item>
              <Card sx={{ width: 580, height: 450 }}>
                <CardActionArea>
                  <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={2}>
                    <Typography variant="h4" sx={{ mt: 5 }}>
                      Nature
                    </Typography>
                    <CardMedia component="img" height="325" image={image} alt="green iguana" />
                    <CardContent>
                      <Box sx={{ border: '2px solid grey' }}>
                        <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                          <Crop169Icon />
                          <Typography>Landscape</Typography>
                          <KeyboardArrowUpIcon />
                          <Divider orientation="vertical" variant="middle" flexItem /> <Typography>Background</Typography>
                          <ColorLensIcon />
                        </Stack>
                      </Box>
                    </CardContent>
                  </Stack>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item>
              <Card variant="outlined" style={{ height: '70vh', width: '60vh' }}>
                <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={2}>
                  <Typography variant="h4">
                    <strong>Project Settings</strong>
                  </Typography>

                  <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                    <Typography variant="h5">Size:</Typography>
                    <FormControl sx={{ m: 1, width: 270 }}>
                      <InputLabel id="demo-multiple-name-label">Select</InputLabel>
                      <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Name" />}
                        MenuProps={MenuProps}
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Stack>
                  <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                    <Typography variant="h5">Background:</Typography>
                    <Card sx={{ height: '95px', width: '220px' }}>
                      <Grid container direction="row" justifyContent="space-around" alignItems="center">
                        <Grid item>
                          <FormControl>
                            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                              <FormControlLabel value="color" control={<Radio />} label="Color" />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                        <Grid item>
                          <FormatColorFillIcon />
                        </Grid>
                      </Grid>
                      <Divider />
                      <Grid container direction="row" justifyContent="space-around" alignItems="center">
                        <Grid item>
                          <FormControl>
                            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                              <FormControlLabel value="img" control={<Radio />} label="Image" />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                        <Grid item>
                          <CloudUploadIcon />
                        </Grid>
                      </Grid>
                    </Card>
                  </Stack>
                  <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                    <Typography variant="h5">Scale:</Typography>
                    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" sx={{ width: '200px' }} />
                    <Chip label="50%" variant="outlined" />
                  </Stack>
                  <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                    <Typography variant="h5">Audio:</Typography>
                    <Card style={{ height: '6vh', width: '40vh' }}>
                      <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                        <AutoAwesomeOutlinedIcon />
                        <Typography>Clean Audio</Typography>
                        <ElectricBoltIcon sx={{ color: '#ffa219' }} />
                      </Stack>
                    </Card>
                  </Stack>

                  <Typography variant="h5">Rotation:</Typography>

                  <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                    <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                      <RefreshIcon />
                      <Typography>Z</Typography>
                      <Chip label="0.0" variant="outlined" />
                    </Stack>
                    <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                      <RefreshIcon />
                      <Typography>Y</Typography>
                      <Chip label="0.0" variant="outlined" />
                    </Stack>
                    <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                      <RefreshIcon />
                      <Typography>X</Typography>
                      <Chip label="0.0" variant="outlined" />
                    </Stack>
                  </Stack>
                  <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                    <Typography variant="h5">Frames per second:</Typography>
                    <FormControl sx={{ m: 1, width: 270 }}>
                      <InputLabel id="demo-multiple-name-label">Select</InputLabel>
                      <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        multiple
                        value={frameTime}
                        onChange={handleTime}
                        input={<OutlinedInput label="Time" />}
                        MenuProps={MenuProps}
                      >
                        {time.map((time) => (
                          <MenuItem key={time} value={time} style={getStyles(time, frameTime, theme)}>
                            {time}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Stack>
                </Stack>
              </Card>
            </Grid>
          </Grid>
          <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={2}>
            <Card sx={{ width: 1000, height: '100px' }}>
              <CardActionArea>
                <CardContent>
                  <Grid container direction="row" justifyContent="space-around" alignItems="center">
                    <Grid item>
                      <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                        <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                          <ContentCutIcon />
                          <Typography>Split</Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                          <KeyboardVoiceIcon />
                          <Typography>Voiceover</Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                    <Grid item>
                      <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                        <FastRewindIcon />

                        <PlayCircleOutlineIcon />
                        <FastForwardIcon />

                        <Typography>00:00.0 / 01:00.0</Typography>
                      </Stack>
                    </Grid>
                    <Grid item>
                      <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                        <ZoomOutIcon />
                        <Slider
                          defaultValue={50}
                          aria-label="Default"
                          valueLabelDisplay="auto"
                          sx={{ width: '100px' }}
                        /> <VolumeUpIcon /> <ZoomInIcon />
                        <Divider orientation="vertical" flexItem />
                        <SettingsIcon />
                      </Stack>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ width: 1000, height: '70px' }}>
              <CardContent>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                  <AddIcon />
                  <Typography>Add media to this project</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
