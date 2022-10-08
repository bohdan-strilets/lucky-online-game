import { RootState } from 'redux/store';

export const getArrBets = (state: RootState) => state.bets.bets;

export const getBet = (state: RootState) => state.bets.bet;

export const getPage = (state: RootState) => state.bets.page;

export const getTotal = (state: RootState) => state.bets.total;
