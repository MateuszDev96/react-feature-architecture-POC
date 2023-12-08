export const featureAuth = () => ({
  name: 'Auth@1.0.0',
  dependencies: [],
  provider: ({ children }) => {
    const isAuthenticated = true

    if (isAuthenticated) {
      return (
        <div style={{ border: '2px dotted green', padding: '8px' }}>
          User is authenticated!
          {children}
        </div>
      )
    }

    return (
      <div>You need to login!</div>
    )
  }
})
