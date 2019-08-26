import { connect } from 'react-redux';
import { Chat } from './Chat';
import { IRootState } from '../appReducer';
import { Dispatch } from 'redux';
import { loadInitialConfiguration, sendMessage } from './chatActions';

export interface IChatDispatchProps {
  sendMessage(query?: string): void;
  initialize(): void;
}

const mapStateToProps = (state: IRootState): IRootState => state;

const mapDispatchToProps = (dispatch: Dispatch<IRootState>): IChatDispatchProps => ({
  sendMessage: (query: string) => dispatch(sendMessage(query)),
  initialize: () => dispatch(loadInitialConfiguration())
});

export const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
