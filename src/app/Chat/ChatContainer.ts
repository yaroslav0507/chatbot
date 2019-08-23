import { connect } from 'react-redux';
import { Chat } from './Chat';
import { IChatState, IRootState } from '../appReducer';
import { Dispatch } from 'redux';
import { loadInitialConfiguration, sendMessage } from './chatActions';

export interface IChatDispatchProps {
  sendMessage(query?: string): void;
  initialize(siteId: string): void;
}

const mapStateToProps = (state: IRootState): IChatState => ({
  config: state.chat.config,
  history: state.chat.history,
  loading: state.chat.loading
});

const mapDispatchToProps = (dispatch: Dispatch<IRootState>): IChatDispatchProps => ({
  sendMessage: (query: string) => dispatch(sendMessage(query)),
  initialize: (siteId: string) => dispatch(loadInitialConfiguration(siteId))
});

export const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
