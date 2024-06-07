import { FC } from "react";
import { ICurrencyInfoPageProps } from "./CurrencyInfoPage.props";
import AboutCurrency from "../components/AboutCurrency/AboutCurrency";

const CurrencyInfoPage: FC<ICurrencyInfoPageProps> = () => {
  // useGetSupportedCodesQuery
  return (
    <div>
      <AboutCurrency />
    </div>
  );
};

export default CurrencyInfoPage;
