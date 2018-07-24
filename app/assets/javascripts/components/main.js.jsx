class Main extends React.Component {

    constructor(props){
        super(props);

        this.loadPeople = this.loadPeople.bind(this);

        this.state = { people: [] };
    }

    loadPeople() {
        $.get('/api/people.json', (data) => {
            this.setState({
                people: data
            })
        })
    }

    componentDidMount() {
        this.loadPeople();
    }

    render(){
        return (
            <div>
                <Header />
                <h1>Hello From React Rails</h1>
                <ListPeople people={this.state.people} />

                <MeuComponent/>

                <button onClick={this.loadPeople}>Atualiza pls</button>
            </div>
        )
    }
}

const MeuComponent = () => {
    return (
        <div>Teste</div>
    );
}