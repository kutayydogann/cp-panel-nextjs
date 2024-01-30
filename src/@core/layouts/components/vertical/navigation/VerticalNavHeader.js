import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';

const MenuHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight,
}));

const LinkStyled = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
});

const VerticalNavHeader = (props) => {
  const { userNavMenuBranding, collapsedNavWidth, navigationBorderWidth, navCollapsed, navHover } = props;

  const theme = useTheme();
  const { mode } = theme.palette;

  const isDarkMode = mode === 'dark';

  const menuHeaderPaddingLeft = () => {
    if (navCollapsed && !navHover) {
      return userNavMenuBranding ? 0 : (collapsedNavWidth - navigationBorderWidth - 32) / 8;
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
          color: theme.palette.text.primary,
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
          <img src={isDarkMode ? '/images/logo-main-white.png' : '/images/logo-main-black.png'} style={{transition: 'opacity 2s' }} alt='Logo' width={180} />
        </LinkStyled>
      )}
    </MenuHeaderWrapper>
  );
};

export default VerticalNavHeader;