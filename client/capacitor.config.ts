import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cutch.app',
  appName: 'cutch',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
