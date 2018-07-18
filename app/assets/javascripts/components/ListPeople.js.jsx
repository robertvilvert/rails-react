class ListPeople extends React.Component {

    getInitialState() {
        return {
            people: []
        }
    }

    componentDidMount() {
        $.get('/api/people.json', function(data) {
            console.log(data)
        })
    }

    render() {
        return(
            <div></div>

        )
    }


}    
        