import React from 'react'

const withCalc = (WrappedComponent, operation) => {

class WithCalc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result:0
        }
    }

    doOperation = () => {
        let result = 0
        switch (operation) {
            case 'add':
                result = result + 10;
            break;
            case 'sub':
            result = result+10 - 5;
            break;
            case 'mul':
            result = 5 * 5;
            break;
            default:
            result = 100/10;
        }
        this.setState (prevState => {
            return {
                result : prevState.result + result
            }
        })
    }

    render () {
        return <WrappedComponent
            doOperation = {this.doOperation}
            result = {this.state.result}
            {...this.props}
            />
        
    }
}

return WithCalc

}

export default withCalc