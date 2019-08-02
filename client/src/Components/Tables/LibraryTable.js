import React from 'react'
import API from '../Utils/API'
import './Tables.css'




class LibraryTable extends React.Component {
    constructor() {
        super();
        this.state = {
          libraryLists: [],
        };
      }
      
      componentDidMount() {
        this.loadLibraries()
      }
    
      loadLibraries = () => {
        API.getLibraries()
        .then(res =>
          this.setState({ libraryLists: res.data }))
          .catch(err => console.log(err))
      };

      libraryVote = id => {
        API.voteLibrary(id)
          .then(res => this.loadLibraries())
          .catch(err => console.log(err));
      };


    render() {
        return this.state.libraryLists.map(library =>
                <tr key={library._id}>
                    <td>{library.title}</td>
                    <td>{library.type}</td>
                    <td>{library.link}</td>
                    <td>{library.body}</td>
                    <td>{library.score}</td>
                    <td>
                        <button className="fas fa-tint grow-icon" onClick={() => this.libraryVote(library.id)}></button>
                    </td>
                </tr>)
      
    }
  }

  export default LibraryTable;



