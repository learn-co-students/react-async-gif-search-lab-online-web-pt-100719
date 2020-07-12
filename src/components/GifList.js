import React from 'react'

export default class GifList extends React.Component{
    
    state = {
        gifs: []
    }

    renderGifList(){
        return this.props.gifs.map((gif, id)=>{
            return <li><img src={gif} id={id} alt="funny gif"/></li>
        })
    }

    render(){
        return (
            <ul>{this.renderGifList()}</ul>
        )
    }

}