import Header from '../components/Header/Header';

const BasePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default BasePage;
