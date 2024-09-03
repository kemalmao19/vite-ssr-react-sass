import { Header } from "../components/Shared/Header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
export default Layout;
