/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";
import config from "../../env";

function MetaTags({
  title = "Blogger.com",
  description = "",
  conicalRoute = "",
}) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${config.clientUrl}/${conicalRoute}`} />
    </Helmet>
  );
}

export default MetaTags;
