import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

    static defaultProps={
        country:'in',
        pageSize:9,
        category:'general',
    }

    // static defaultProps={
    //     country:PropTypes.string,
    //     pageSize:PropTypes.number,
    //     category:PropTypes.string,
    // }

    articles=[]
    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading:false,
            page:1,
            totalResults:0,
        }
    }
    async componentDidMount(){
        this.props.setProgress(8);
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        let data=await fetch(url);
        this.props.setProgress(40);
        let parseData=await data.json();
        this.props.setProgress(75);
        console.log(parseData);
        this.setState(
            {articles: parseData.articles,
            totalResults:parseData.totalResults,
            loading:false
        });
        this.props.setProgress(100);
        document.title="Giramsan-News "+(this.props.category).toUpperCase();
    }
    // handlenextclick= async ()=>{
    //     if(this.state.page+1>Math.ceil(this.state.totalResults/9)){
    //         alert(`You have read All News related to ${this.props.category} No more news available now...!`)
    //     }
    //     else{
    //         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
    //         let data=await fetch(url);
    //         let parseData=await data.json();
    //         console.log(parseData);

    //         this.setState({
    //             page:this.state.page+1,
    //             articles: parseData.articles
    //         });
    //         window.scrollTo({
    //             top: 0,
    //             behavior: 'smooth',
    //           });
    //     }  
    // }

    // handlepreviousclick= async()=>{
    //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
    //     let data=await fetch(url);
    //     let parseData=await data.json();
    //     console.log(parseData);

    //     this.setState({
    //         page:this.state.page-1,
    //         articles: parseData.articles
    //     });
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth',
    //       });

    // }

    fetchMore= async ()=>{

        this.setState({page:this.state.page+1});
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        let data=await fetch(url);
        let parseData=await data.json();
        console.log(parseData);
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults:parseData.totalResults,
            loading:false
        });
    }
    render() {
        let ss=this.props.category;
        let imgurl="https://media.istockphoto.com/vectors/abstract-globe-background-vector-id1311148884?s=612x612"
        return (
            <>
                <h2 className='mt-5 pt-3 text-center '>
                Giramsan-News Top {ss.charAt(0).toUpperCase() + ss.slice(1)} headlines
                </h2>
                <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMore}
                hasMore={this.state.articles.length!==this.state.totalResults}
                >
                <div className='container'>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return  <div className=" col-md-4" key={element.title} >
                            <NewsItem  title={element.title?element.title.slice(0,45):""}
                            description={element.description?element.description.slice(0,88):""}
                            author={element.author}
                            date={element.publishedAt}
                            imageurl={element.urlToImage?element.urlToImage:imgurl}
                            newsUrl={element.url?element.url:""}
                            source={element.source.name}
                            />
                        </div>
                })}
                
                </div>
                </div>
                </InfiniteScroll>
                
            </>
        )
    }
}

