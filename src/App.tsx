import { FC } from 'react';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { PageNavLinks } from './components/PageNavLinks';
import { PeoplePage } from './components/PeoplePage/PeoplePage';

export const App: FC = () => {
  return (
    <div data-cy="app">
      <nav
        data-cy="nav"
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <PageNavLinks />
        </div>
      </nav>

      <main className="section">
        <div className="container">
          <Routes>
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
            <Route
              path="home"
              element={<Navigate to="/" replace />}
            />
            <Route
              path="/"
              element={<h1 className="title">Home Page</h1>}
            />
            <Route path="people">
              <Route
                index
                element={(
                  <>
                    <h1 className="title">People Page</h1>
                    <PeoplePage />
                  </>
                )}
              />
              <Route
                path=":slug"
                element={(
                  <>
                    <h1 className="title">People Page</h1>
                    <PeoplePage />
                  </>
                )}
              />
            </Route>
          </Routes>
        </div>
      </main>
    </div>
  );
};