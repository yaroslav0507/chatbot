import { createReducer } from '../../utils/reducerUtils';
import { IRootState } from '../appReducer';
import { IChatBotInitialConfig } from './interfaces';

export const CHAT_CONFIG_LOADED = 'CHAT_CONFIG_LOADED';

const onConfigLoaded = (state: IRootState, action: {data: IChatBotInitialConfig}) => action.data;

export const chatReducer = createReducer({}, {
  [CHAT_CONFIG_LOADED]: onConfigLoaded
});
