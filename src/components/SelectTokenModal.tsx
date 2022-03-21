import { SelectTokenModalProps } from "../models/PropTypes";
import ModalBody from "./Modal/ModalBody";
import ModalContainer from "./Modal/ModalContainer";
import ModalFooter from "./Modal/ModalFooter";
import ModalHeader from "./Modal/ModalHeader";
import { FiEdit } from "react-icons/fi";
import TokenBadge from "./TokenBadge";
import { IToken } from "../models/Interfaces";

const SelectTokenModal = ({ className, closeModal }: SelectTokenModalProps) => {
  const frequentlySwappedTokens: IToken[] = [];
  const tokensList: IToken[] = [];

  return (
    <ModalContainer className={className}>
      <ModalHeader className="" title="Select a token" closeModal={closeModal}>
        <input type="text" className="border border-gray-300 rounded-2xl text-gray-700 px-4 py-3 my-4 focus-visible:outline-1 focus-visible:outline-pink-400 text-lg" placeholder="Search name or paste address" />
        <div className="flex flex-wrap">
          {frequentlySwappedTokens.map((token, index) => (
            <TokenBadge key={index} token={token} className="px-2 py-1.5 font-medium m-1 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100" />
          ))}
        </div>
      </ModalHeader>
      <ModalBody></ModalBody>
      <ModalFooter className="bg-gray-100">
        <div className="text-pink-600 font-medium flex justify-center items-center">
          <FiEdit className="mx-1" />
          <p className="">Manage Token Lists</p>
        </div>
      </ModalFooter>
    </ModalContainer>
  )
};

export default SelectTokenModal;