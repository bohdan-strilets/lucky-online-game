import api from 'api';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  IGetAllBetsRes,
  IGetOneBetRes,
  ICreateBetRes,
  ICreateBetData,
  IChangeBetRes,
} from 'types/IBetsApi';

const getAllBets = createAsyncThunk<IGetAllBetsRes>(
  'bets/get-all-bets',
  async () => {
    try {
      const { data } = await api.get('/api/v1/bets/');
      return data;
    } catch (error: any) {
      const message = error.response.data.message;
      message
        ? toast.warning(message)
        : toast.warning('Sorry something went wrong... Please try again.');
    }
  },
);

const getOnebet = createAsyncThunk<IGetOneBetRes, string>(
  'bets/get-one-bet',
  async betId => {
    try {
      const { data } = await api.get(`/api/v1/bets/${betId}`);
      return data;
    } catch (error: any) {
      const message = error.response.data.message;
      message
        ? toast.warning(message)
        : toast.warning('Sorry something went wrong... Please try again.');
    }
  },
);

const createBet = createAsyncThunk<ICreateBetRes, ICreateBetData>(
  'bet/create-bet',
  async bet => {
    try {
      const { data } = await api.post('/api/v1/bets/', bet);
      return data;
    } catch (error: any) {
      const message = error.response.data.message;
      message
        ? toast.warning(message)
        : toast.warning('Sorry something went wrong... Please try again.');
    }
  },
);

const changeBet = createAsyncThunk<IChangeBetRes, any>(
  'bet/change-bet',
  async bet => {
    try {
      const { data } = await api.put(`/api/v1/bets/${bet.betId}`, {
        isWon: bet.isWon,
      });
      return data;
    } catch (error: any) {
      const message = error.response.data.message;
      message
        ? toast.warning(message)
        : toast.warning('Sorry something went wrong... Please try again.');
    }
  },
);

const operations = {
  getAllBets,
  getOnebet,
  createBet,
  changeBet,
};

export default operations;
