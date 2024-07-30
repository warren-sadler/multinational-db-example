interface ConfigGetter<T> {
  (overrides: Partial<T>): T;
}

/**
 *
 * @param configGetter - A function that returns the configuration object
 * @returns
 */
export function generateWithConfig<T>(configGetter: ConfigGetter<T>) {
  return <R>(callback: (config: T) => R, overrides: Partial<T> = {}) => {
    return callback(configGetter(overrides));
  };
}
