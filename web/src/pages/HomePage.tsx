import {
  StyledInfiniteScroll,
  StyledInfiniteScrollWidget,
  StyledInfiniteScrollWidgetHeaderTabs,
  StyledInfiniteScrollWidgetHeaderTitle,
  StyledItem,
  StyledThumbnailWrapper,
} from '../components/InfiniteScrollWidget/styled';
import { MainHeader } from '../components/MainHeader';
import { Container } from '../components/MainHeader/styled';
import infiniteScrollData from '../data/infiniteScroll.json';

export const HomePage = () => {
  return (
    <div>
      <MainHeader />
      <main>
        <Container>
          <StyledInfiniteScrollWidget>
            <div
              className='header'
              style={{ position: 'sticky', top: 0, zIndex: 998 }}
            >
              <StyledInfiniteScrollWidgetHeaderTitle>
                Gợi Ý Hôm Nay
              </StyledInfiniteScrollWidgetHeaderTitle>
              <StyledInfiniteScrollWidgetHeaderTabs>
                {infiniteScrollData.tabs.map((tab, index) => (
                  <div className='tab' key={index}>
                    <img width={48} src={tab.icon} />
                    <div className='tab-text'>{tab.title}</div>
                  </div>
                ))}
              </StyledInfiniteScrollWidgetHeaderTabs>
            </div>
            <StyledInfiniteScroll>
              <div className='content'>
                {infiniteScrollData.tabs[0].items.map((item, index) => (
                  <div key={index}>
                    <div style={{ width: '100%', height: '100%' }}>
                      <a className='product-item' href='/'>
                        <StyledItem>
                          <div>
                            <div className='thumbnail'>
                              <StyledThumbnailWrapper>
                                <img src={item.thumbnail_url} />
                              </StyledThumbnailWrapper>
                            </div>
                            <div className='info'>
                              <div className='name'>
                                <h3>{item.name}</h3>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <div style={{ display: 'flex' }}>
                                  <div style={{ position: 'relative' }}>
                                    <div
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                      }}
                                    >
                                      {Array.from({ length: 5 }).map(
                                        (_, index) => (
                                          <svg
                                            key={index}
                                            stroke='currentColor'
                                            fill='currentColor'
                                            strokeWidth={0}
                                            viewBox='0 0 24 24'
                                            color='#c7c7c7'
                                            height={14}
                                            width={14}
                                            xmlns='http://www.w3.org/2000/svg'
                                            style={{
                                              color: 'rgb(199, 199, 199)',
                                            }}
                                          >
                                            <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'></path>
                                          </svg>
                                        )
                                      )}
                                    </div>
                                    <div
                                      style={{
                                        width: '100%',
                                        whiteSpace: 'nowrap',
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        overflow: 'hidden',
                                      }}
                                    >
                                      {Array.from({ length: 5 }).map(
                                        (_, index) => (
                                          <svg
                                            key={index}
                                            stroke='currentColor'
                                            fill='currentColor'
                                            strokeWidth={0}
                                            viewBox='0 0 24 24'
                                            color='#fdd836'
                                            height='14'
                                            width='14'
                                            xmlns='http://www.w3.org/2000/svg'
                                            style={{
                                              color: 'rgb(253, 216, 54)',
                                            }}
                                          >
                                            <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'></path>
                                          </svg>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </div>
                                {item.quantity_sold && (
                                  <div
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      color: 'rgb(120, 120, 120)',
                                      lineHeight: 'normal',
                                      fontSize: 11,
                                      paddingLeft: 4,
                                    }}
                                  >
                                    <div
                                      style={{
                                        width: 1,
                                        height: 9,
                                        backgroundColor: 'rgb(199, 199, 199)',
                                      }}
                                    ></div>
                                    <div style={{ paddingLeft: 6 }}>
                                      Đã bán {item.quantity_sold.text}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className='price-discount'>
                                <div className='price-discount__price'>
                                  {item.price} ₫
                                </div>
                              </div>
                            </div>
                          </div>
                        </StyledItem>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </StyledInfiniteScroll>
          </StyledInfiniteScrollWidget>
        </Container>
      </main>
    </div>
  );
};
