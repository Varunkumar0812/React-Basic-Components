import Button from "../components/Button";
import { GoBell, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button success className="mb-5" outline rounded onClick={handleClick}>
          <GoBell className="mr-1" />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger>Buy now!</Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          lmao
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
