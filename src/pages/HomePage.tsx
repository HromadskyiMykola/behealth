import { Helmet } from "react-helmet";

import { MainLayout } from "../components/Main";

export const HomePage = () => (
  <>
    <Helmet>
      <title>Головна - BeHealth</title>
      <meta name="description" content="Головна сторінка сайту BeHealth." />
    </Helmet>
    <MainLayout />;
  </>
);
