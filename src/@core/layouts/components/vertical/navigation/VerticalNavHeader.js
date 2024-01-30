import React from 'react';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Icon from 'src/@core/components/icon';
import themeConfig from 'src/configs/themeConfig';

const MenuHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight,
}));

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  lineHeight: '24px',
  fontSize: '1.375rem !important',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out',
}));

const LinkStyled = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
});

const VerticalNavHeader = (props) => {
  const {
    hidden,
    navHover,
    settings,
    saveSettings,
    collapsedNavWidth,
    toggleNavVisibility,
    navigationBorderWidth,
    menuLockedIcon: userMenuLockedIcon,
    navMenuBranding: userNavMenuBranding,
    menuUnlockedIcon: userMenuUnlockedIcon,
  } = props;

  const theme = useTheme();
  const { navCollapsed } = settings;

  const isDarkMode = theme.palette.mode === 'dark';

  const toggleDarkMode = () => {
    saveSettings({ ...settings, mode: isDarkMode ? 'light' : 'dark' });
  };

  const menuCollapsedStyles = navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 };

  const menuHeaderPaddingLeft = () => {
    if (navCollapsed && !navHover) {
      if (userNavMenuBranding) {
        return 0;
      } else {
        return (collapsedNavWidth - navigationBorderWidth - 32) / 8;
      }
    } else {
      return 4.5;
    }
  };

  const conditionalColors = () => {
    if (isDarkMode) {
      return {
        '& .MuiTypography-root, & .MuiIconButton-root': {
          color: `rgba(${theme.palette.customColors.dark}, 0.87)`,
        },
      };
    } else {
      return {
        '& .MuiTypography-root, & .MuiIconButton-root': {
          color: 'text.primary',
        },
      };
    }
  };

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: menuHeaderPaddingLeft(), ...conditionalColors(), display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {userNavMenuBranding ? (
        userNavMenuBranding(props)
      ) : (
        <LinkStyled href='/'>
          <img src={isDarkMode ? '/images/logo-main-white.png' : '/images/logo-main-black.png'} alt='Logo' width={180} />
        </LinkStyled>
      )}
      <IconButton color='inherit' onClick={toggleDarkMode}>
        <Icon icon={isDarkMode ? 'sun' : 'moon'} size={20} />
      </IconButton>
    </MenuHeaderWrapper>
  );
};

export default VerticalNavHeader;