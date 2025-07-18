import { theme } from 'antd';
import type { ThemeConfig } from 'antd';

const mainColor = 'hsla(214, 56%, 21%, 1)';
const mainColorHover = 'hsla(214, 56%, 26%, 1)';
const mainColorActive = 'hsla(214, 56%, 16%, 1)';
// Ant Design theme configuration based on the previous MUI VOZ forum theme
const antdTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    // Primary colors (Deep blue from previous MUI theme)
    colorPrimary: mainColor,
    colorPrimaryHover: mainColorHover,
    colorPrimaryActive: mainColorActive,
    
    // Secondary/accent colors (Amber from previous MUI theme)
    colorInfo: '#f59e0b',
    colorInfoHover: '#fbbf24',
    colorInfoActive: '#d97706',
    
    // Status colors
    colorSuccess: '#10b981',
    colorWarning: '#f59e0b',
    colorError: '#ef4444',
    
    // Background colors
    colorBgBase: '#ffffff',
    colorBgContainer: '#ffffff',
    colorBgElevated: '#ffffff',
    colorBgLayout: '#f3f4f6',
    colorBgSpotlight: '#f9fafb',
    
    // Text colors
    colorText: '#111827',
    colorTextSecondary: '#4b5563',
    colorTextTertiary: '#6b7280',
    colorTextQuaternary: '#9ca3af',
    
    // Border colors
    colorBorder: '#e5e7eb',
    colorBorderSecondary: '#d1d5db',
    
    // Font settings
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: 14,
    fontSizeHeading1: 38,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 16,
    
    // Layout
    borderRadius: 8,
    borderRadiusLG: 12,
    borderRadiusSM: 6,
    borderRadiusXS: 4,
    
    // Spacing
    padding: 16,
    paddingLG: 24,
    paddingSM: 12,
    paddingXS: 8,
    paddingXXS: 4,
    
    margin: 16,
    marginLG: 24,
    marginSM: 12,
    marginXS: 8,
    marginXXS: 4,
    
    // Box shadow
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    boxShadowSecondary: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    boxShadowTertiary: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    
    // Layout breakpoints
    screenXS: 480,
    screenSM: 576,
    screenMD: 768,
    screenLG: 992,
    screenXL: 1200,
    screenXXL: 1600,
  },
  components: {
    Layout: {
      headerBg: mainColor,
      headerColor: '#ffffff',
      siderBg: '#ffffff',
      bodyBg: '#f3f4f6',
    },
    Menu: {
      itemBg: 'transparent',
      itemColor: '#4b5563',
      itemHoverColor: mainColor,
      itemSelectedColor: mainColor,
      itemSelectedBg: '#eff6ff',
    },
    Button: {
      primaryColor: '#ffffff',
      primaryShadow: '0 2px 0 rgba(5, 145, 255, 0.1)',
      dangerShadow: '0 2px 0 rgba(255, 38, 5, 0.06)',
    },
    Input: {
      borderRadius: 8,
    },
    Card: {
      borderRadius: 12,
      boxShadowTertiary: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    },
    Avatar: {
      borderRadius: 50,
    },
    Badge: {
      colorError: '#ef4444',
      colorSuccess: '#10b981',
    },
    Typography: {
      colorText: '#111827',
      colorTextSecondary: '#4b5563',
    },
  },
};

export default antdTheme; 