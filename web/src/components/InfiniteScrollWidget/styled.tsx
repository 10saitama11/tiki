import styled from 'styled-components';

export const StyledInfiniteScrollWidget = styled.div`
  background: rgb(245, 245, 250);
  margin-top: 16px;
  border-radius: 4px;

  & > .header {
    display: flex;
    background-color: rgb(245, 245, 250);
    border-radius: 4px 4px 0px 0px;
    flex-direction: column;
  }
`;

export const StyledInfiniteScrollWidgetHeaderTitle = styled.h2`
  padding: 10px 16px;
  display: flex;
  background-color: white;
  flex: 1 1 0%;
  font-size: 20px;
  line-height: 28px;
  text-transform: capitalize;
  margin-bottom: 4px;
  border-radius: 4px;
  font-weight: initial;
`;

export const StyledInfiniteScrollWidgetHeaderTabs = styled.div`
  display: grid;
  margin-bottom: 4px;
  overflow: auto;
  position: relative;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 4px;

  & .tab {
    /* border: 1px solid rgb(13, 92, 182); */
    background-color: white;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    min-height: 78px;
    border-radius: 4px;
    padding: 4px 8px;

    & img {
      border-radius: 4px;
    }

    & > .tab-text {
      padding-top: 4px;
      font-size: 13px;
      line-height: 18px;
      text-align: center;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      word-break: break-word;
      display: -webkit-box;
    }
  }
`;

export const StyledImg = styled.img`
  object-fit: contain;
`;

export const StyledInfiniteScroll = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  background: white;
  padding: 0px 0px 16px;
  border-radius: 0px 0px 4px 4px;

  & > .content {
    display: flex;
    flex-wrap: wrap;
    align-self: stretch;
    background-color: rgb(255, 255, 255);
    border-top: 1px solid rgb(242, 242, 242);

    & > * {
      width: 16.6667%;
    }

    .product-item {
      text-decoration: none;
      display: flex;
      position: relative;
      cursor: pointer;
      width: 100%;
      height: 100%;
    }
  }
`;

export const StyledItem = styled.span`
  display: flex;
  flex-direction: column;
  padding: 12px;
  color: rgb(56, 56, 61);
  width: 100%;
  height: 100%;
  -webkit-box-pack: justify;
  justify-content: space-between;

  & .thumbnail {
    flex-shrink: 0;
    text-align: center;
    position: relative;
    width: 100%;
  }

  & .price-discount {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 4px;
    color: rgb(56, 56, 61);

    & .price-discount__price {
      font-size: 16px;
      line-height: 24px;
      font-weight: 600;
    }
  }

  & .name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;

    & > h3 {
      font-size: 13px;
      margin: 0px 0px 4px;
      line-height: 20px;
      word-break: break-word;
      font-weight: initial;
    }
  }
`;

export const StyledThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  & img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
`;
