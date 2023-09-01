const UUID = '6f2aacb7-d81f-412f-999f-320acf091717' // randomUUID();

const IS_DEBUG = process.env.NODE_ENV === 'development'

/**
 * Problem: We should make sure that tbsui-ssr internal classnames and id's will not likely collide with the user's own classnames and id's.
 *
 * That being said, we still want the classnames and IDs to be easy to read and understand, especially when debugging.
 *
 * This function will append a unique identifier to a string to make sure it isn't generic enough to collide with the user's own classnames and id's.
 *
 * @param name The classname or ID or whatever we want to make unique
 * @returns a consistent, unique name
 */
export const getBrandedName: (name: string) => string = (name): string =>
  IS_DEBUG ? `tbsui-ssr-${name}` : `tbsui-ssr-${name}-${UUID}`
