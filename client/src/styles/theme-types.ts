import '@mui/material';

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    navigation: CSSProperties;
    footer: CSSProperties;
  }
}
