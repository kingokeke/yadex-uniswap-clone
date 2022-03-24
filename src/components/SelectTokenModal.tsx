import { ChangeEvent, useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { useRecoilValue } from "recoil";
import frequentlySwappedTokens from "../data/frequentlySwappedTokens";
import { IToken } from "../models/Interfaces";
import { SelectTokenModalProps } from "../models/PropTypes";
import { tokensListAtom } from "../store/atoms";
import ModalBody from "./Modal/ModalBody";
import ModalContainer from "./Modal/ModalContainer";
import ModalFooter from "./Modal/ModalFooter";
import ModalHeader from "./Modal/ModalHeader";
import TokenBadge from "./TokenBadge";
import TokenListing from "./TokenListing";

const SelectTokenModal = ({ className, closeModal, selectToken, direction }: SelectTokenModalProps) => {
  const tokensList: IToken[] = useRecoilValue(tokensListAtom);
  const [filteredTokens, setFilteredTokens] = useState(tokensList);
  useEffect(() => setFilteredTokens(tokensList), [tokensList]);

  const searchTokens = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchValue = event.target.value.toLowerCase();
    const filtered = tokensList.filter(
      (token: IToken) =>
        token.symbol.toLowerCase().includes(searchValue) ||
        token.name.toLowerCase().includes(searchValue) ||
        token.address.toLowerCase().includes(searchValue)
    );
    setFilteredTokens(filtered);
  };

  return (
    <ModalContainer className={className}>
      <ModalHeader className="" title="Select a token" closeModal={closeModal}>
        <input
          type="text"
          className="border border-gray-300 rounded-2xl text-gray-700 px-4 py-3 my-4 mx-1 focus-visible:outline-1 focus-visible:outline-pink-400 text-lg"
          placeholder="Search name or paste address"
          onChange={searchTokens}
        />
        <div className="flex flex-wrap">
          {frequentlySwappedTokens.map((token: IToken, index: number) => (
            <TokenBadge
              key={index}
              token={token}
              className="px-2 py-1.5 font-medium m-1 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200"
            />
          ))}
        </div>
      </ModalHeader>
      <ModalBody>
        {filteredTokens.length > 0 ?
          filteredTokens.map((token: IToken) => <div key={token.address} onClick={() => { closeModal(); selectToken({ token, direction })}}><TokenListing token={token} /></div>) :
          <div className="flex items-center justify-center h-96">
            <p className="text-gray-600">No results found</p>
          </div>
        }
      </ModalBody>
      <ModalFooter className="bg-gray-100">
        <div className="text-pink-600 font-medium flex justify-center items-center">
          <FiEdit className="mx-1" />
          <p className="">Manage Token Lists</p>
        </div>
      </ModalFooter>
    </ModalContainer>
  );
};

export default SelectTokenModal;
