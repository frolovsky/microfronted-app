import { IUserState } from '@/store/user/types';
import { Module } from 'vuex';
import { IRootState } from '@/store/store.types';
import { mutations } from '@/store/user/mutations';
import { actions } from '@/store/user/actions';
import { getters } from '@/store/user/getters';

const state: IUserState = {
  userData: {
    id: '1',
    username: 's',
    email: 'ap@ma.cr',
    avatar: '',
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
} as Module<IUserState, IRootState>;
