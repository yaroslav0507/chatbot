import { connect } from 'react-redux';
import { Chat } from './Chat';
import { IRootState } from '../appReducer';
import { Dispatch } from 'redux';
import { IChatBotInitialConfig } from './interfaces';
import { loadInitialConfiguration } from './chatActions';

export interface IChatStateProps {
  data: IChatBotInitialConfig;
}

export interface IChatDispatchProps {
  initialize(siteId: string): void;
}

const mapStateToProps = (state: IRootState): IChatStateProps => ({
  data: state.app.config
});

const mapDispatchToProps = (dispatch: Dispatch<IRootState>): IChatDispatchProps => ({
  initialize: (siteId: string) => dispatch(loadInitialConfiguration(siteId))
});

export const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
