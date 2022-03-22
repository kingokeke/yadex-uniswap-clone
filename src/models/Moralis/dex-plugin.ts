interface BaseDTO {
  chain: string;
}

interface TokenDTO extends BaseDTO {
  fromTokenAddress: string;
  toTokenAddress: string;
}

interface TokenAmountDTO extends TokenDTO {
  amount: string;
}

export interface IGetSupportedTokensDTO extends BaseDTO {}

export interface IApproveDTO extends TokenDTO {}

export interface IGetQuoteDTO extends TokenAmountDTO {}

export interface IHasAllowanceDTO extends TokenAmountDTO {}

export interface ISwapDTO extends TokenAmountDTO {
  fromAddress: string,
  slippage: number;
}
