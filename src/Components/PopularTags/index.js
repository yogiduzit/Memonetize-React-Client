import React from 'react';

export default function PopularTags(props) {
  return(
    <div className="popular-tags-container">
      <div className="ui celled list">
        <h3 className="popular-tags-heading">Trending !</h3>
        {props.popularTags.map((value, index) => {
          return ( <div class="item">
                <div className="content">
                  <a href={`/memes?tagName=${value}`}>
                    <p className="tag" key={`${index}`}>{`${value}`}</p>
                  </a>
                </div>
              </div>)
          })}
      </div>
      <button className="see-all-tags btn btn-primary">
      <a href="/tags">See all</a></button>
    </div>
  )
}