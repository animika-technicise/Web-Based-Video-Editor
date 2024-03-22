// assets
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';

// icons
const icons = {
  AutoAwesomeMosaicOutlinedIcon,
  FolderOutlinedIcon,
  PodcastsOutlinedIcon
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  type: 'group',
  children: [
    {
      id: 'newVideo',
      title: 'Edit Video',
      type: 'item',
      url: '/editVideo',
      icon: icons.AutoAwesomeMosaicOutlinedIcon,
      target: true
    },
    {
      id: 'video',
      title: 'All Videoes',
      type: 'item',
      icon: icons.FolderOutlinedIcon,
      target: true
    },
    {
      id: 'podcast',
      title: 'Podcast & Shows',
      type: 'item',
      icon: icons.PodcastsOutlinedIcon,
      target: true
    },
    {
      id: 'template',
      title: 'Template',
      type: 'item',
      icon: icons.FolderOutlinedIcon,
      target: true
    }
  ]
};

export default pages;
