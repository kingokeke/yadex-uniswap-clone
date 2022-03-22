import Moralis from 'moralis';
import { IApproveDTO, IGetQuoteDTO, IGetSupportedTokensDTO, IHasAllowanceDTO, ISwapDTO } from '../models/Moralis/dex-plugin';

export const getSupportedTokens = async (req: IGetSupportedTokensDTO) => Moralis.Plugins.oneInch.getSupportedTokens(req);
export const getQuote = async (req: IGetQuoteDTO) => Moralis.Plugins.oneInch.quote(req);
export const hasAllowance = async (req: IHasAllowanceDTO) => Moralis.Plugins.oneInch.hasAllowance(req);
export const approve = async (req: IApproveDTO) => Moralis.Plugins.oneInch.approve(req);
export const swap = async (req: ISwapDTO) => Moralis.Plugins.oneInch.swap(req);