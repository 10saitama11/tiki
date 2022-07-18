import {
  BottomRoot,
  Container,
  FormSearchButton,
  FormSearchForm,
  FormSearchInput,
  FormSearchRoot,
  Header,
  LogoMenu,
  MiddleLeftContainer,
  MiddleWrap,
  StyledLogo,
} from './styled';

export const MainHeader = () => {
  return (
    <Header>
      <Container>
        <MiddleWrap>
          <MiddleLeftContainer>
            <div className='logo-menu'>
              <StyledLogo>
                <a href='/' className='tiki-logo'>
                  <img src='https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png' />
                </a>
              </StyledLogo>
            </div>
            <FormSearchRoot>
              <FormSearchForm>
                <FormSearchInput
                  type='text'
                  placeholder='Tìm sản phẩm, danh mục hay thương hiệu mong muốn ...'
                />
                <FormSearchButton>
                  <img
                    className='icon-search'
                    src='https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png'
                  />
                </FormSearchButton>
              </FormSearchForm>
            </FormSearchRoot>
          </MiddleLeftContainer>
        </MiddleWrap>
      </Container>
      <BottomRoot>
        <Container
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <a href='/' style={{ position: 'absolute', top: 0 }}>
            <img
              src='https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png'
              height={12}
              width={83}
            />
          </a>
          <a style={{ display: 'flex', height: 22, marginBottom: 12 }}></a>
        </Container>
      </BottomRoot>
    </Header>
  );
};
