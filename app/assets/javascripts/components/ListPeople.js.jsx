class ListPeople extends React.Component {
    render() {
        const { people } = this.props;

        return(
            <div>
                <div>
                    {people.map((person, index) => {
                        return (
                            <div key={index}>
                                <h4>{ person.name }</h4>
                                <p> { person.age }</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
 }    


        