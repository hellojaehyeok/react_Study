import React, { PureComponent } from 'react';

class TodoAddForm extends PureComponent {

    inputRef = React.createRef();

    onSubmit = (e) =>{
        e.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputRef.current.value = "";
    };
    


    render() {
        return (
            <form onSubmit={this.onSubmit} className="input-form">
                <input
                className="todo-input"
                ref={this.inputRef}
                type="text"
                placeholder="할일을 적어주세요"
                />
                <button className="add-button" type="submit">추가</button>
            </form>
        );
    }
}

export default TodoAddForm;