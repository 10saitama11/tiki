import styled from 'styled-components';

export const CategoryViewContentWrap = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
`;

export const CategoryViewRight = styled.div`
  width: 991px;
  border-radius: 0px 4px 4px 0px;

  & .search-summary {
  }
`;

export const SideBarRoot = styled.div`
  background-color: rgb(255, 255, 255);
  width: 248px;
  border-radius: 4px 0px 0px 4px;
  overflow: hidden;

  & .block {
    padding: 0px 8px 12px 16px;
  }

  & .block .title {
    margin: 0px;
    line-height: 20px;
    display: block;
    color: rgb(36, 36, 36);
    font-size: 13px;
    padding: 14px 0px;
    font-weight: 600;
    text-transform: uppercase;
  }

  & .block .list .item {
    font-size: 13px;
    color: rgb(36, 36, 36);
    padding: 0px 0px 8px;
    line-height: 20px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
`;

export const LocationWrapper = styled.div`
  border-top: 1px solid rgb(247, 247, 247);
  padding: 0px 8px 12px 16px;

  & .delivery-zone__heading > h4 {
    margin: 0px;
    line-height: 20px;
    display: block;
    color: rgb(36, 36, 36);
    font-size: 13px;
    padding: 14px 0px;
    font-weight: 500;
    text-transform: uppercase;
  }

  & .delivery-zone__heading .address {
    text-decoration: underline;
    font-size: 13px;
    line-height: 20px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & .delivery-zone__heading .address-change {
    color: rgb(13, 92, 182);
    font-size: 13px;
    line-height: 20px;
    font-weight: 500;
    flex-shrink: 0;
    cursor: pointer;
  }
`;

export const ProductListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: stretch;
  background-color: rgb(255, 255, 255);

  & > * {
    width: 25%;
  }

  & .product-item {
    text-decoration: none;
    display: flex;
    position: relative;
    border: 1px solid transparent;
    cursor: pointer;
  }

  & .product-item:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;
    z-index: 1;
  }
`;

export const StyledItem = styled.span`
  display: flex;
  padding: 12px 16px;
  color: rgb(36, 36, 36);
  text-decoration: none;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;

  & .thumbnail {
    flex-shrink: 0;
    width: 200px;
    height: 200px;
    margin: 0px 12px 12px;
    text-align: center;
    position: relative;
  }

  & .thumbnail .image-wrapper {
    width: 100%;
    padding-top: 100%;
    position: relative;

    & img {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      object-fit: contain;
      max-width: 100%;
    }
  }

  & .name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;

    & > h3 {
      font-size: 13px;
      font-weight: 400;
      margin: 0px 0px 4px;
      line-height: 20px;
      word-break: break-word;
    }
  }

  & .price-discount {
    text-align: left;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: rgb(56, 56, 61);
    margin: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
`;
