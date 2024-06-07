import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./Auth/SignIn/SignIn";
import SignUp from "./Auth/SignUp/SignUp";
import Header from "./Layout/Header/Header";
import Main from "./Layout/Main/Main";
import CurrencyRateCard from "./Layout/components/CurrencyRateCard/CurrencyRateCard";
import NotRegisteredUser from "./Layout/components/NotRegisteredUser/NotRegisteredUser";
import { routers } from "./helpers/routers/routers";
import NotAuthenticated from "./Layout/components/NotAuthenticated/NotAuthenticated";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Footer from "./Layout/Footer/Footer";
import ConvertCurrencyPage from "./page/ConvertCurrencyPage/ConvertCurrencyPage";
import ExchangeRateInfo from "./Layout/components/ExchangeRateInfo/ExchangeRateInfo";
import CurrencyPageInfo from "./page/CurrencyInfoPage/CurrencyInfoPage";

function App() {
  const router = createBrowserRouter([
    {
      path: routers.home,
      element: (
        <>
          <Header />
          <Main>
            <ExchangeRateInfo />
            <NotAuthenticated>
              <NotRegisteredUser />
            </NotAuthenticated>

            <CurrencyRateCard />
          </Main>
          <Footer />
        </>
      ),
    },
    {
      path: routers.convert,
      element: (
        <>
          <Header />
          <Main>
            <ExchangeRateInfo />
            <ConvertCurrencyPage />
          </Main>
          <Footer />
        </>
      ),
    },
    {
      path: routers.about,
      element: (
        <>
          <Header />
          <Main>
            <div>wwwww</div>
          </Main>
          <Footer />
        </>
      ),
    },
    {
      path: routers.currencies,
      element: (
        <>
          <Header />
          <Main>
            <CurrencyPageInfo />
          </Main>
          <Footer />
        </>
      ),
    },

    {
      path: routers.login,
      element: (
        <>
          <Header />
          <SignIn />
          <Footer />
        </>
      ),
    },
    {
      path: routers.register,
      element: (
        <>
          <Header />
          <SignUp />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
