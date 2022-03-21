import { ModalContainerProps } from "../../models/PropTypes";

const ModalContainer = ({ className, children, width }: ModalContainerProps) => {
    return (
      <div className={(className ? className + " " : "") + "z-30 bg-black/50 absolute left-0 right-0 top-0 bottom-0 w-screen h-screen flex flex-col justify-center items-center"}>
        <div className="w-[28rem]">{ children }</div>
      </div>
  );
};

export default ModalContainer;