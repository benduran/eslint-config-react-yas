# eslint-config-react-yas
YAS. An ESLint config that, you know, just works and makes sense and requires no more setup. This is a "batteries-included" eslint config, and comes with the correct base `eslint` dependency, all required `eslint` plugins, as well as the correct version of `prettier` and connective tissue. Enjoy!

## Installation
**Yarn**
`yarn add eslint-config-react-yas --dev`

**NPM**
`npm install eslint-config-react-yas --save-dev`

## Usage 

### Legacy format

In your `.eslintrc.json` (or `eslintrc.js` or equivalent)
```
{
  "extends": "eslint-config-react-yas"
}
```

### Flat format

For the newish [flat configuration](https://github.com/prettier/eslint-plugin-prettier?tab=readme-ov-file#installation:~:text=For-,flat%20configuration,-%2C%20this%20plugin%20ships), create an `eslint.config.js` file (if you don't already have one), and be sure to import `eslintConfigReactYas` at the top, then specify it in your config array:

```javascript
import eslintConfigReactYas from 'eslint-config-react-yas';

export default [...eslintConfigReactYas, /* place any additional configs or overrides here */];
```

## Why?
I've wired up more eslint configs than I would like to admit, and I do not like doing it. These configuration settings I've found to work wonders for BOTH regular, vanilla JS projects, AND React projects. Using this, you can throw away your `.prettierrc` file and just let `eslint` do all the code quality checking and formatting.

## License
[MIT](https://opensource.org/licenses/MIT)
