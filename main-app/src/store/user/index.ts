import { IUserState } from '@/store/user/types';
import { Module } from 'vuex';
import { IRootState } from '@/store/store.types';
import { mutations } from '@/store/user/mutations';
import { actions } from '@/store/user/actions';
import { getters } from '@/store/user/getters';

const state: IUserState = {
  userData: {
    id: '1',
    username: 'Vagner Love',
    email: 'ap@ma.cr',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/5/54/VagnerLove.jpg',
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
} as Module<IUserState, IRootState>;
