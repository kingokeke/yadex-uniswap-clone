import { IoMdClose } from "react-icons/io";
import { ModalHeaderProps } from "../../models/PropTypes";

const ModalHeader = ({ className, closeModal, title, children }: ModalHeaderProps) => {
  return (
    <div className={(className ? className + " " : "") + "flex flex-col p-4 bg-white rounded-t-xl border-b border-gray-200"}>
      <div className="flex flex-row justify-between">
        <p className="font-medium">{ title }</p>
        <IoMdClose className="cursor-pointer font-bold text-2xl" onClick={closeModal} />
      </div>
      {children}
    </div>
  );
};

export default ModalHeader;