import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isPageloading = navigation.state === "loading";
  return (
    <>
      <Navbar />
      <section className="page">
        {isPageloading ? <div className="loading"></div> : <Outlet />}
      </section>
    </>
  );
};
export default HomeLayout;
