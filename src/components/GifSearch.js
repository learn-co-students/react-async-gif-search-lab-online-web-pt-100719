import React from 'react'

export default class GifSearch extends React.Component {

    constructor(){
        super()
        this.state = {
            search: ''
        }
    }

    updateSearch(searchText){
        this.setState({
            search: searchText
        })
    }

    render() {
        return (
            <form onSubmit={event => this.props.searchGifs(event, this.state.search)}>
                <input onChange={event=> this.updateSearch(event.target.value)}value={this.state.input}></input>
                <input type="submit"/>
            </form>
        )
    }

}