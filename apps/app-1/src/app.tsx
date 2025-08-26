import Button from './components/button/button';
import './app.css';
import Input from './components/input/input';

export function App() {
  return (
    <div className="phone-form-container">
      <div className="phone-form-card">
        <div className="phone-form-header">
          <h1 className="phone-form-title">Enter Phone Number</h1>
          <p className="phone-form-subtitle">
            We'll send you a verification code to confirm your number
          </p>
        </div>

        <form className="phone-form">
          <div className="form-group">
            <label htmlFor="phone-number" className="form-label">
              Phone Number
            </label>
            <Input
              id="phone-number"
              type="tel"
              placeholder="+1 (555) 123-4567"
              variant="filled"
              size="lg"
              fullWidth
              required
              autoComplete="tel"
              pattern="[\+]?[1-9][\d]{0,15}"
              helperText="Enter your phone number with country code"
            />
          </div>

          <div className="form-actions">
            <Button variant="primary" size="lg" fullWidth type="submit">
              Send Verification Code
            </Button>
          </div>
        </form>

        <div className="phone-form-footer">
          <p className="terms-text">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
