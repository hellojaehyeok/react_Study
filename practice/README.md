# React Study 

영화 리스트와 회원가입 제작 후 React에 대한 기본기 복습과 세부적인 공부를 위해 제작하였습니다.        
이번 프로젝트에서는 React hooks 대신 class를 활용하여 기존의 react에 집중하였습니다.        
react를 설치하며 불필요한 파일들을 모두 제거하고 파일 이름을 .jsx로 설정하여 리액트 파일인지 구분하였습니다.       


<hr />

### State

React 어플리케이션은 state가 변하면 전체적으로 render가 호출이 되는데 실제로 필요한 부분만 dom 요소에 업데이트된다.      
this.setState -> state를 업데이트해야 할때는 setState를 이용하여야 한다.       


<hr />

### To do list

Nav와 todo 같은 세부적인 것들, 중복돼서 사용되는 것들을 컴포넌트로 만들고 app.js에서 관리하였습니다.        



<hr />

### To do list - Click Event

클릭 이벤트가 일어나면 todo.jsx 파일 안에 있는 함수가 실행됩니다.        


todo.jsx

    handleIncrement = () =>{
        this.props.onIncrement(this.props.todo);
    };

    <button className="todo-button todo-increase"  onClick={this.handleIncrement}>


props를 타고 올라가 todos.jsx에서 다시 한번 한수가 실행됩니다.       


todos.jsx

    handleIncrement = (todo) =>{
        this.props.onIncrement(todo);
    };


    {
        this.props.todos.map(todo =>(
            <Todo
            key={todo.id}
            todo={todo}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            />
        ))
    }


마지막으로 app.jsx에서 함수가 실행되어 카운트가 증가합니다.       
상위 파일에서 count 같은 유동적인 부분을 관리하고 중복되는 부분들이 있으면       
component로 생성하여 재사용과 변경이 쉽게 가능하도록 만들었습니다.       
        
state의 값을 직접적으로 바꾸면 안되기 때문에 함수 실행 시 
똑같은 배열을 만든 후 그 배열을 조정 후 setState를 이용하여 업데이트하였습니다.

    handleIncrement = (todo) =>{
        const todos = [...this.state.todos];
        const index = todos.indexOf(todo);
        todos[index].count++;
        const navCount = this.state.count+1;
        this.setState({todos, count : navCount});
    };

    <Todos 
        todos={this.state.todos}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        onAdd={this.handleAdd}
        onReset={this.handleReset}
    />



<hr />

### Ref

React.createRef();를 사용하여 Ref 오브젝트를 생성하고 접근하고자 하는 요소에 ref를 추가하여 연결한다.   


    inputRef = React.createRef();

    onSubmit = (e) =>{
        ...
        this.inputRef.current.value = "";
    };

    <input
    className="todo-input"
    ref={this.inputRef}
    type="text"
    placeholder="할일을 적어주세요"
    />


<hr />

### PureComponent && memo

일반 Component와 달리 PureComponent 는 props와 state 안에 있는 데이터가 최상위에있는       
데이터가 변하지 않으면 다시 렌더링이 되지 않는다.      

memo -> class가 아닌 funtion 형식일때 쓰인다. PureComponent와 동일한 기능이다.