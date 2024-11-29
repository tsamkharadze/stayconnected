import { Outlet } from 'react-router-dom';
import { PageContainer } from '../page-containers/default-layout-page-container';
import Header from '@/components/ui-blocks/header/views/header';
import Footer from '@/components/ui-blocks/footer/footer';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
    </>
  );
};

export default DefaultLayout;
