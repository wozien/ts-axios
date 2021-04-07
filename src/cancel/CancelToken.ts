import { CancelExecutor } from '../types'

interface ResolvePromise {
  (reason?: string): void
}

export default class CancelToken {
  promise: Promise<string | undefined>
  reason?: string

  constructor(executor: CancelExecutor) {
    let resolvePromise: ResolvePromise
    this.promise = new Promise<string | undefined>(resolve => {
      resolvePromise = resolve
    })

    executor(message => {
      if(this.reason) return
      this.reason = message
      resolvePromise(this.reason)
    })
  }
}
