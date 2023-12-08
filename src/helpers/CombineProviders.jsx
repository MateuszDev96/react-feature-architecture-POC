export const CombineProviders = ({ providers = [], children }) => {
  if (providers.length !== 0) {
    const [Component, ...currentProviders] = providers

    return (
      <Component>
        <CombineProviders providers={currentProviders}>
          {children}
        </CombineProviders>
      </Component>
    )
  }

  return children
}