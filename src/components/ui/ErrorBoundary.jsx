import { Component } from 'react'
import Icon from './Icon'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 px-6 text-center">
            <Icon name="error_outline" size={48} className="text-error" />
            <h1 className="font-headline-md text-headline-md text-primary">Something went wrong</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-on-primary font-label-bold text-label-bold px-6 py-3 rounded-lg hover:opacity-80 transition-opacity"
            >
              Refresh Page
            </button>
          </div>
        )
      )
    }
    return this.props.children
  }
}
