import request from '@/utils/request'

export function getHomeProductShowData() {
  return request({
    url: '/home/show/product',
    method: 'get'
  })
}
export function getHomeFrontShowData() {
  return request({
    url: '/home/show/front',
    method: 'get'
  })
}
export function getHomePendingTaskDate() {
  return request({
    url: '/home/show/task',
    method: 'get'
  })
}
