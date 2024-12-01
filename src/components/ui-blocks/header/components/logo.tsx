import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <div>
      <Link to="/">
      <h1 className='text-onSurface text-sm font-bold md:text-2xl'>
        Stay connected
      </h1>
      </Link>
    </div>
  );
};
export default Logo;
