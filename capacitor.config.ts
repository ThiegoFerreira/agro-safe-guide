
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.07369980178c42bc9a6fcec4e51de0a9',
  appName: 'agro-safe-guide',
  webDir: 'dist',
  server: {
    url: 'https://07369980-178c-42bc-9a6f-cec4e51de0a9.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#16a34a',
      showSpinner: false
    }
  }
};

export default config;
