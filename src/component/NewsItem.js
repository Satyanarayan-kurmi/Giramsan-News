import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
      let {imageurl,title , description,newsUrl,author,date,source}=this.props;
      // span
    return (
      <div className='my-3 mx-3'>
         <div className="card" >
         <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}> {source} </span>
            <img src={imageurl} className="card-img-top" alt="news" />
            <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}....</p>
            <p className='card-text'><small className='text-muted'>By : {author?author:"Unkonwn"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" style={{background:'rgb(59 67 94)', color:'white'}} className="btn btn-sm ">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
