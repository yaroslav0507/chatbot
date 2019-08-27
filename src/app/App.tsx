import * as React from 'react';
import { Provider } from 'react-redux';
import { ChatContainer } from './Chat/ChatContainer';
import { GlobalStyles } from './styles';
import { PersistGate } from 'redux-persist/integration/react';
import { IConfiguredStore } from './store';

interface IAppComponentProps {
  store: IConfiguredStore;
}

export const App: React.FC<IAppComponentProps> = (props) => {
  const { store, persistor } = props.store;

  return (
    <Provider store={store}>
      <GlobalStyles/>

      <PersistGate persistor={persistor}>
        <ChatContainer/>
      </PersistGate>
    </Provider>
  )
};
