import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, Mail, Lock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { ThemeToggle } from '@/components/ThemeToggle';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Your existing login logic here
      // const { data } = await authAPI.login({ email, password });
      // localStorage.setItem('token', data.accessToken);
      // localStorage.setItem('user', JSON.stringify(data.user));
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Błąd logowania. Sprawdź dane i spróbuj ponownie.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Activity className="h-6 w-6 text-critical" />
            <span className="text-xl font-bold">ParaMed AI Trainer</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">
              Witaj ponownie
            </CardTitle>
            <CardDescription>
              Zaloguj się do swojego konta aby kontynuować trening
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="rounded-lg bg-critical/10 border border-critical/20 p-3 text-sm text-critical">
                  {error}
                </div>
              )}

              <Input
                label="Email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="twoj@email.pl"
                required
                disabled={loading}
                icon={<Mail className="h-5 w-5 text-muted-foreground" />}
              />

              <Input
                label="Hasło"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                disabled={loading}
                icon={<Lock className="h-5 w-5 text-muted-foreground" />}
              />

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-input text-primary focus:ring-primary"
                  />
                  <span className="text-muted-foreground">Zapamiętaj mnie</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-primary hover:underline"
                >
                  Zapomniałeś hasła?
                </Link>
              </div>

              <Button
                type="submit"
                variant="primary"
                fullWidth
                loading={loading}
                disabled={loading}
                size="lg"
              >
                {loading ? 'Logowanie...' : 'Zaloguj się'}
                {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Lub
                  </span>
                </div>
              </div>

              <div className="mt-6 text-center text-sm">
                <span className="text-muted-foreground">Nie masz jeszcze konta? </span>
                <Link
                  to="/register"
                  className="font-medium text-primary hover:underline"
                >
                  Zarejestruj się
                </Link>
              </div>
            </div>

            <div className="mt-6 space-y-2 text-center text-xs text-muted-foreground">
              <p>
                Logując się akceptujesz nasze{' '}
                <Link to="/terms" className="underline hover:text-foreground">
                  Warunki korzystania
                </Link>
              </p>
              <p>
                oraz{' '}
                <Link to="/privacy" className="underline hover:text-foreground">
                  Politykę prywatności
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        <p>© 2025 ParaMed AI Trainer. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};

export default Login;
