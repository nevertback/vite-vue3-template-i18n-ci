import request from '@/utils/request'
export const ApiGetUserList = (params) => {
  return request({
    method: 'get',
    url: '/user/list',
    params
  })
}
