import { createGlobalStyle } from "styled-components";
const globalStyle = createGlobalStyle`
* {
    font-family: "Inter", sans-serif;
}

.navbar{
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x)* .5);
    padding-left: calc(var(--bs-gutter-x)* .5);
    margin-right: auto;
    margin-left: auto;
    
    
}

.nav-link {
    color: black;
}

.atual {
    color: #709A4F !important;
}


.navbar-brand img {
    height: 40px; /* Ajuste o tamanho do logo conforme necessário */
}

.container-fluid {
    padding: 0;
}
`

export default globalStyle