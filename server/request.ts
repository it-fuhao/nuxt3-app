import { $fetch } from 'ohmyfetch';
import { RequestType, ResponseType } from './api/model/request.interface';

class MyFetch {
  baseOptions = {
    headers: {
      'Content-Type': 'application/json',
      fuckdes: true
    }
  };

  async fetch (options: RequestType) {
    const { url, headers } = options;
    let res: ResponseType;
    try {
      res = await $fetch(url, {
        headers: headers || this.baseOptions.headers,
        ...options
      });
    } catch (error) {
      throw error;
    }
    return res;
  }
}

export default new MyFetch();
