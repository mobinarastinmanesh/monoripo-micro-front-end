import { lazy, Suspense } from 'react';
import './app.css';
// @ts-expect-error - Module Federation remote import
const Button = lazy(() => import('app1/Button'));
// @ts-expect-error - Module Federation remote import
const Input = lazy(() => import('app1/Input'));

export function App() {
  return (
    <div className="app-container">
      <div className="app-content">
        <h1 className="app-title">Hello from Host App</h1>
        <div className="components-section">
          <div className="component-wrapper">
            <Suspense
              fallback={
                <div className="loading-fallback">Loading Button...</div>
              }
            >
              <Button variant="primary" size="md">
                Click me!
              </Button>
            </Suspense>
          </div>
          <div className="component-wrapper">
            <Suspense
              fallback={
                <div className="loading-fallback">Loading Input...</div>
              }
            >
              <Input variant="filled" size="sm" />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
