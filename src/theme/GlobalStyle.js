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
	height: 100vh;
}
#root {
	height: 100%;
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
`;
