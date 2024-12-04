import { Link as RouterDomLink } from "react-router-dom";

export const Link = (props) => {
  return (
    <RouterDomLink
      {...props}
      to={import.meta.env.PROD ? `/EatWell-new${props.to}` : props.to}
    />
  );
};
