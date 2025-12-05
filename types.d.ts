declare module 'eslint-config-react-yas' {
  import type { ConfigArray } from 'typescript-eslint';
  const standalone: ConfigArray[];
  export { standalone };
  export const respectPrettierConfig: ConfigArray[];

  export default standalone;
}
