import { Helmet } from "react-helmet-async";

const Title = ({ title = "ChatBook Web App", description = "This is the Mega Chat App" }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
