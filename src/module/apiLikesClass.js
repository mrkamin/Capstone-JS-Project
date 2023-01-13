import { newLikeUrl } from './varialbels.js';

export class LikesApi {
    static ApiLikesUrl = newLikeUrl;

    static async likeGet() {
      const response = await fetch(LikesApi.ApiLikesUrl);
      const data = await response.json();
      return data;
    }

    static async likePost(id) {
      const response = await fetch(LikesApi.ApiLikesUrl, {
        method: 'POST',
        body: JSON.stringify({
          item_id: id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      return data;
    }
}

export default LikesApi;