import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  background: rgb(26, 148, 255);
  z-index: 999;
  & > * {
    letter-spacing: normal;
  }
`;

export const Container = styled.div`
  width: 1270px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const MiddleWrap = styled.div`
  display: flex;
  padding: 16px 0px 10px;
  height: auto;
  position: relative;
  z-index: 2;
  align-items: center;
  -webkit-box-align: center;
  & .logo-menu {
    display: flex;
    align-items: flex-start;
    flex-basis: 190px;
    flex-shrink: 0;
    margin-right: 16px;
  }
`;

export const MiddleLeftContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  -webkit-box-align: center;
  align-items: center;
`;

export const LogoMenu = styled.div``;

export const StyledLogo = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex: 1 1 0%;
  & .tiki-logo {
    width: 60px;
    height: 40px;
    display: block;
  }

  & .tiki-logo img {
    width: 100%;
    height: 100%;
  }
`;

export const FormSearchRoot = styled.div`
  flex: 1 1 0%;
`;

export const FormSearchForm = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  box-sizing: rgb(98 98 98 / 50%) 0px 1px 2px 0px;
`;

export const FormSearchInput = styled.input`
  border: 0px;
  padding: 0px 12px;
  font-size: 13px;
  border-radius: 2px 0px 0px 2px;
  flex: 1 1 0%;
  outline: none;
`;

export const FormSearchButton = styled.button`
  cursor: pointer;
  border: 0px;
  width: 120px;
  background: rgb(13, 92, 182);
  height: 40px;
  border-radius: 0px 2px 2px 0px;
  color: white;
  font-size: 13px;
  font-weight: 500;
  outline: none;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;

  & .icon-search {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`;

export const BottomRoot = styled.div`
  position: relative;
  z-index: 1;
`;
