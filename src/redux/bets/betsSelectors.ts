import { RootState } from 'redux/store';

export const getArrBets = (state: RootState) => state.bets.bets;

export const getBet = (state: RootState) => state.bets.bet;
