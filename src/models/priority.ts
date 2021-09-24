export enum Priority {
  ERROR = 0,
  WARNING = 1,
  INFO = 2,
}

export const PRIORITY_COLORS = {
  [Priority.ERROR]: '#F56236',
  [Priority.WARNING]: '#FCE788',
  [Priority.INFO]: '#88FCA3',
}