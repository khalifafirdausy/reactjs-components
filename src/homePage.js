import React from 'react';
import FormPost from './formPost'
import PostCard from './postCard'

class HomePage extends React.Component {
	
	state = {
    bio: [
      {
        name: "Maulana Yusuf",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        name: "Maulana Yusuf",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        name: "Maulana Yusuf",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        name: "Maulana Yusuf",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      }
    ]
	}
	
	render(){
		return(
			<React.Fragment>
				<FormPost />
				<PostCard bioData={this.state} />
			</React.Fragment>
		)
	}
}

export default HomePage