import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentRouteAtom } from "../store/atoms";

const Vote = () => {
  const [_, setCurrentRoute] = useRecoilState(currentRouteAtom);

    useEffect(() => {
      setCurrentRoute("vote");
    }, []);

  return (
    <div className="flex justify-center">
      <h1>I AM VOTE</h1>
    </div>
  );
};

export default Vote;