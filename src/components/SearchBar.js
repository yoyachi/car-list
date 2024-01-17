function SearchBar ({ onSubmit }) {
    const [term, useTerm] = useState('');
    //create an event handler
    const handleFormSubmit = (event) => {
        //when handling "form submission event" to prevent default behavior calling the URL we code:
        event.preventDefault();

        onSubmit('asjd');

    };

    const hadleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div>
            {/* to create professional submit bars we use the html structure wrapping input with form element to automatically trigger a "submit event"  */}
            {/* to listen the submit event: */}
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange} />
            </form>
            
            
        </div>
    );

}

export default SearchBar;