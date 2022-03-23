import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentRouteAtom } from "../store/atoms";

const Pool = () => {
  const [_, setCurrentRoute] = useRecoilState(currentRouteAtom);

  useEffect(() => {
    setCurrentRoute("pool");
  }, []);

  return (
    <div className="flex justify-center">
      <h1>I AM POOL</h1>
    </div>
  );
};

export default Pool;
