export type ActionHealtType = {
  type: string,
  payload?: any
}

export type HealtState = {
  healt: string | null,
  loandingHealt: boolean,
  errorHealt: string | null
}