import React from 'react'
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GiftListContainer extends React.Component {
    
    state = {
        gifs: []
    }

    searchGifs = (event, search) => {
        event.preventDefault()
        this.componentDidMount(search)
    }

    render() {
        return( 
            <div>
                <GifSearch searchGifs={this.searchGifs}/>
                <GifList gifs={this.state.gifs}/>
             </div>
        )
    }

    componentDidMount(search) {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(json => {
            let gifs = []
            for(let i = 0; i< 3; i++){
                gifs.push(json.data[i].images.original.url)
            }
            this.setState({
                gifs: gifs
            })
        })
    }

}

export default GiftListContainer