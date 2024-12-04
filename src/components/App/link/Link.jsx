import { Link as RouterDomLink } from "react-router-dom";

export const Link = (props) => {
  return props.to.startsWith("#") ? (
    <a {...props} href={props.to} />
  ) : (
    <RouterDomLink {...props} />
  );
};
