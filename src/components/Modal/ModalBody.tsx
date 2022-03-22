import { ModalBodyProps } from "../../models/PropTypes";

const ModalBody = ({className, children}: ModalBodyProps) => {
  return (
    <div className={(className ? className + " " : "") + "bg-white overflow-x-hidden overflow-y-auto"}>
      <div className="max-h-[60vh]">
        {children}
      </div>
    </div>
  );
};

export default ModalBody;