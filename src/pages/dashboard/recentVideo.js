import * as React from 'react';
import Card from '@mui/material/Card';
import VideoImage from 'assets/images/video/RecentVideo.png';
import VideoImage1 from 'assets/images/video/RecentVideo1.png';
import VideoImage2 from 'assets/images/video/RecentVideo2.png';
import Stack from '@mui/material/Stack';

// import CardActions from '@mui/material/CardActions';
// import IconButton from '@mui/material/IconButton';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function RecentVideo() {
  return (
    <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
      <Card>
        <img src={VideoImage2} alt="Video" height="170px" width="300px" />
        <CardContent>
          <Typography>Modern Education</Typography>
          <Typography variant="body2" color="text.secondary">
            10 minutes ago
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <img src={VideoImage1} alt="Video" height="170px" width="300px" />
        <CardContent>
          <Typography>Fruits</Typography>
          <Typography variant="body2" color="text.secondary">
            5 minutes ago
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <img src={VideoImage} alt="Video" height="170px" width="300px" />
        <CardContent>
          <Typography>Nature</Typography>
          <Typography variant="body2" color="text.secondary">
            10 minutes ago
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
