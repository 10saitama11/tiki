import { BreadCrumb } from '../components/BreadCrumb';
import { CategoryView } from '../components/CategoryView';
import { MainHeader } from '../components/MainHeader';

export const ListingPage = () => {
  return (
    <div>
      <MainHeader />
      <main>
        <BreadCrumb />
        <CategoryView />
      </main>
    </div>
  );
};
