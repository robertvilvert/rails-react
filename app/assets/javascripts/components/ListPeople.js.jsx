class ListPeople extends React.Component {

    getInitialState() {
        return {
            people: []
        }
    }

	 componentDidMount() {
	 	var self = this
	 	$.get('/api/people.json', function(data) {
	 		self.setState({
	 			people: data
	 		})
	 	})
	 }

    render() {
		let self = this
        let people = this.props.people.map(function(item)  { 
			return(
				<div>
					<h4>{ item.name }</h4>
                    <p> { item.age }</p>
                </div>
            )
        });
        return(
            <div>
                <h1>({people})</h1>
            </div>

        )
    }


 }    


        