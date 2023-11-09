import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { usePromiseTracker } from 'react-promise-tracker';
/** Local Modules */
import useConfig from 'config';
import useRouter from 'routes';
import useViews from 'views';


const App = () => {
    /** Routes */
    const Router = useRouter();

    /** Config */
    const { useInterceptors, useStoreConfig } = useConfig();
    const { store, persistor } = useStoreConfig();

    /** Promise */
    const { promiseInProgress } = usePromiseTracker();

    /** Views */
    const { useComponents } = useViews();
    const { Loading } = useComponents();

    return (
        <React.Suspense fallback={<Loading />}>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    {promiseInProgress && <Loading />}
                    {useInterceptors(store)}
                    {Router}
                </PersistGate>
            </Provider>
        </React.Suspense>
    );
};

export default App;
