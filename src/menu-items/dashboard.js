// assets
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// icons
const icons = {
  HomeOutlinedIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Home',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.HomeOutlinedIcon,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
