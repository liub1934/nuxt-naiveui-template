type Recordable<T = any> = Record<string, T>
interface ReadonlyRecordable<T = any> {
  readonly [key: string]: T
}
interface Indexable<T = any> {
  [key: string]: T
}
type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}
type TimeoutHandle = ReturnType<typeof setTimeout>
type IntervalHandle = ReturnType<typeof setInterval>
interface Window {
  /** Loading bar instance */
  $loadingBar: import('naive-ui').LoadingBarProviderInst
  /** Dialog instance */
  $dialog: import('naive-ui').DialogProviderInst
  /** Message instance */
  $message: import('naive-ui').MessageProviderInst
  /** Notification instance */
  $notification: import('naive-ui').NotificationProviderInst
}
type FixedLengthArray<T, L extends number, R extends T[] = []>
  = R['length'] extends L ? R : FixedLengthArray<T, L, [...R, T]>
