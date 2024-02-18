import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import theme from './themeJSX';

export const GlobalStyle = createGlobalStyle`

html {
	scroll-behavior: smooth;
}

body {
  position: relative;
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  line-height: 1.43;

  // min-height: 100vh;
  font-style: normal;
  color: ${theme.colors.primaryBlack};
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

// button {
// 		padding: 0;
// 		border: none;
// 		font: inherit;
// 		color: inherit;
// 		cursor: pointer;
// 	}

a{
  text-decoration: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
