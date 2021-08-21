import styled from 'styled-components';

const logoSrc = require('@public/images/gus-sales-logo.svg');

const MainLogo = styled.img.attrs({
  src: logoSrc,
  alt: 'Um círculo com duas chaves que representam sentenças de código seguidos pelo nome Gus Sales, formando o logotipo',
})`
  width: 14.9rem;
  height: 3.9rem;
`;

export default MainLogo;
