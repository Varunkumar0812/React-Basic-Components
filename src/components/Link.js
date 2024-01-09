import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ children, to, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-black w-full bg-sky-300 h-10 flex items-center pl-2 hover:bg-sky-600 hover:text-white",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    if (event.metaKey || event.strlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
