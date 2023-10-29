import { useMediaQuery } from 'react-responsive';

import theme from '../theme';

export const useIsMobileQuery = () =>
  useMediaQuery({
    query: `(min-width: ${theme.breakpoints.mobile})`,
  });

export const useIsDesktopQuery = () =>
  useMediaQuery({
    query: `(min-width: ${theme.breakpoints.desktop})`,
  });
