import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="mb-6">
              <AlertTriangle className="w-16 h-16 text-red-500 mx-auto" aria-hidden="true" />
            </div>
            <h1 className="text-2xl font-mono font-bold text-white mb-4">
              SYSTEM ERROR
            </h1>
            <p className="text-gray-400 mb-2">Something went wrong.</p>
            {this.state.error && (
              <p className="text-xs text-red-400 font-mono mb-6 p-3 bg-red-500/10 rounded break-all">
                {this.state.error.message}
              </p>
            )}
            <button
              onClick={this.handleReload}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-primary text-black font-mono font-bold rounded-lg hover:bg-cyber-primary/80 transition-colors"
            >
              <RefreshCcw className="w-4 h-4" aria-hidden="true" />
              RELOAD SYSTEM
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
