// var searchYouTube = ({key, query, max = 5}, callback) => {
//   $.get('https://googleapis.com/youtube/v3/search', 
//   { part: 'id', q: query, type: 'video', key: key })
//   .done(({items}) => {console.log('hi');callback(items)});
// };

// export default searchYouTube;

import YOUTUBE_API_KEY from '../config/youtube.js'

const searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      key: YOUTUBE_API_KEY,
      q: query,
      maxResults: 5,
      type: 'video',
      videoEmbeddable: 'true'
    },
    success: ({ items }) => {
      callback(items)
    },
    error: (err) => {
      console.error(err)
    }
  })
}

export default searchYouTube

