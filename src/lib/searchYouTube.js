var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://googleapis.com/youtube/v3/search', 
  { part: 'snippet', key: key, q: query, maxResults: max, type: 'video', videoEmbeddable: 'true' })
  .done((data) => {callback(data)});
};

export default searchYouTube;
