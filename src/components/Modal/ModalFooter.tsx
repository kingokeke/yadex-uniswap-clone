import { ModalFooterProps } from "../../models/PropTypes";

const ModalFooter = ({ className, children }: ModalFooterProps) => {
  return (
    <div className={(className ? className + " " : "") + "px-6 py-4 bg-white rounded-b-xl border-t border-gray-200"}>
      {children}
    </div>
  );
};

export default ModalFooter;