import http from '@/api/http'
import type { Response } from '@/api/http'

export interface UserInfo {
  username: string
  password: string
}

function fetchAccount(): Promise<Response<UserInfo>> {
  return http.get('/mock/api/account')
}

export { fetchAccount }
