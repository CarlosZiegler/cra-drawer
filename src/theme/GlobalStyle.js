import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
	margin: 0;
	font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen",
		"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100vh;
	overflow-y: scroll;
}

html {

}
#root {

	display: flex;
	flex-direction: column;
	justify-content:center;
}

code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
		monospace;
}

input {
	filter: none;
  }

a {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
  }
}
`;
