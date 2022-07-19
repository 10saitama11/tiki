import styled from 'styled-components';

export const BreadCrumbWrapper = styled.div`
  background-color: rgb(245, 245, 250);

  & .breadcrumb {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  & a.breadcrumb-item {
    position: relative;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: 40px;
    color: rgb(128, 128, 137);
    font-size: 14px;
    line-height: 20px;
    font-weight: 300;
    white-space: nowrap;
  }

  & .icon.icon-next {
    margin-left: 5.5px;
    margin-right: 8.5px;
  }

  & .icon {
    display: inline-block;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: 0px 0px;
  }
`;
