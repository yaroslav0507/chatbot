import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { History } from 'history';
import { IRootState } from './appReducer';
import { ChatContainer } from './Chat/ChatContainer';

interface IAppComponentProps {
  store: Store<IRootState | undefined>;
  history: History;
}

export const App: React.FC<IAppComponentProps> = ({store, history}) => (
  <Provider store={store}>
    <ChatContainer />
  </Provider>
);
