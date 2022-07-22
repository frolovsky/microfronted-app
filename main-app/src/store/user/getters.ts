import { GetterTree } from 'vuex';
import { IUser, IUserState } from '@/store/user/types';
import { IRootState } from '@/store/store.types';

export const getters: GetterTree<IUserState, IRootState> = {
  userData(state: IUserState): IUser | null {
    return state.userData;
  },
};
