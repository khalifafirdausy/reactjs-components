import React from 'react';
import FormPost from './formPost'
import PostCard from './postCard'

class HomePage extends React.Component {
	
	render(){
		return(
			<React.Fragment>
				<FormPost />
				<PostCard />
			</React.Fragment>
		)
	}
}

export default HomePage