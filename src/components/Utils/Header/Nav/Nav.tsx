import { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Link,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from '@mui/material';
import { SxProps } from '@mui/material/styles';

interface INavProps<T> {
  pagesUrls: T[];
  buttonType?: boolean;
  closeDrawer?: Dispatch<SetStateAction<boolean>>;
  sx?: SxProps;
}

const Nav = <T extends { name: string; url: string }>({
  pagesUrls,
  buttonType = false,
  closeDrawer = () => {},
  ...rest
}: INavProps<T>) => {
  const sx = buttonType ? {} : { display: { xs: 'none', md: 'flex' } };

  if (!pagesUrls.length) return null;

  const linkElements = pagesUrls.map((page, i) => {
    return !buttonType ? (
      <ListItem key={i} sx={{ display: 'block', width: 'auto' }}>
        <Link
          underline='none'
          component={NavLink}
          color='text.primary'
          to={page.url || '/'}
          fontSize='1.25rem'
          sx={{
            '&.active': {
              borderBottomWidth: '2px',
              borderBottomStyle: 'solid',
              borderColor: 'primary.main',
              paddingBottom: '18px',
            },
            '&:hover': {
              color: 'primary.main',
            },
          }}>
          {page.name}
        </Link>
      </ListItem>
    ) : (
      <ListItemButton
        key={i}
        component={NavLink}
        to={page.url || '/'}
        onClick={() => closeDrawer(false)}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '&.active .link': {
            borderBottomWidth: '2px',
            borderBottomStyle: 'solid',
            borderColor: 'primary.main',
          },
        }}>
        <Typography className='link' color='text.primary' fontSize='1.25rem'>
          {page.name}
        </Typography>
      </ListItemButton>
    );
  });

  return (
    <Box id='nav' component='nav' sx={sx}>
      <List disablePadding {...rest}>
        {linkElements}
      </List>
    </Box>
  );
};

export default Nav;
