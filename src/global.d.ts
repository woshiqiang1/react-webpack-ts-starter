declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}

declare interface Window {
  // extend the window
  someField: string
}
