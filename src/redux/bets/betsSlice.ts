import { createSlice } from '@reduxjs/toolkit';
import operations from './betsOperations';
import { IBetsState } from 'types/IBetsState';

const initialState: IBetsState = {
  bets: null,
  bet: {
    _id: null,
    owner: null,
    type: null,
    number: null,
    color: null,
    isWon: false,
    betAmount: null,
    coefficient: null,
    winningAmount: null,
    createdAt: null,
    updatedAt: null,
  },
  page: 0,
  limit: 0,
  total: 0,
};

export const betsSlice = createSlice({
  name: 'bets',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(operations.getAllBets.fulfilled, (state, action) => {
        try {
          state.bets = action.payload.bets;
          state.page = action.payload.page;
          state.limit = action.payload.limit;
          state.total = action.payload.total;
        } catch (error) {}
      })

      .addCase(operations.getOnebet.fulfilled, (state, action) => {
        try {
          state.bet = action.payload.bet;
        } catch (error) {}
      })

      .addCase(operations.createBet.fulfilled, (state, action) => {
        try {
          state.bet = action.payload.bet;
        } catch (error) {}
      })

      .addCase(operations.changeBet.fulfilled, (state, action) => {
        state.bet.isWon = true;
        state.bet.winningAmount = action.payload.bet.winningAmount;
      });
  },
});

export default betsSlice;
