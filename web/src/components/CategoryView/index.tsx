import { StyledImg } from '../InfiniteScrollWidget/styled';
import { Container } from '../MainHeader/styled';
import {
  CategoryViewContentWrap,
  CategoryViewRight,
  ProductListWrapper,
  SideBarRoot,
  StyledItem,
} from './styled';
import products from '../../data/products.json';

export const CategoryView = () => {
  return (
    <Container>
      <CategoryViewContentWrap>
        <SideBarRoot>
          <div>
            <div className='block'>
              <h4 className='title'>Danh Mục Sản Phẩm</h4>
              <div className='list'>
                <a className='item'>Trái Cây Nội Địa</a>
                <a className='item'>Trái Cây Nhập Khẩu</a>
              </div>
            </div>
          </div>
        </SideBarRoot>
        <CategoryViewRight>
          <div>
            <div className='search-summary'>{/* todo */}</div>
            <ProductListWrapper>
              {products.map((product, index) => (
                <div key={index}>
                  <a className='product-item'>
                    <StyledItem>
                      <div>
                        <div className='thumbnail'>
                          <div className='image-wrapper'>
                            <StyledImg src={product.thumbnail_url} />
                          </div>
                        </div>
                        <div className='info'>
                          <div className='name'>
                            <h3>{product.name}</h3>
                          </div>
                          <div className='price-discount'>
                            <div>{product.price} ₫</div>
                          </div>
                        </div>
                      </div>
                    </StyledItem>
                  </a>
                </div>
              ))}
            </ProductListWrapper>
          </div>
        </CategoryViewRight>
      </CategoryViewContentWrap>
    </Container>
  );
};
