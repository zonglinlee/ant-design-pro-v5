import {request} from "@umijs/max";

export async function testLogin(params: API.TestLogin) {
  return request<API.TestResponseBase>('/api/test/login', {data: params, method: 'POST'})
}
