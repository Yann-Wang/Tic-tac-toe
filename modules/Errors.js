/**
 * Created by a_wav on 2016/12/9.
 */
import React from 'react'

const divStyle = {
    background:'#c00',
    color: '#fff',
    display:'none',
    margin: '-20px -20px 20px',
    padding: '20px',
    whiteSpace: 'pre-wrap'
};

class Errors extends React.Component {
    constructor(props) {
        super(props);
        this.errors = null;
    }

    render() {
        return (
            <div style={divStyle} ref={(errors) => this.errors = errors}></div>
        );
    }
    componentDidMount(){
        const errors = this.errors;

        window.addEventListener('mousedown', function(e) {
            document.body.classList.add('mouse-navigation');
            document.body.classList.remove('kbd-navigation');
        });
        window.addEventListener('keydown', function(e) {
            if (e.keyCode === 9) { // tab
                document.body.classList.add('kbd-navigation');
                document.body.classList.remove('mouse-navigation');
            }
        });
        window.addEventListener('click', function(e) {
            if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
        window.onerror = function(message, source, line, col, error) {
            var text = error ? error.stack || error : message + ' (at ' + source + ':' + line + ':' + col + ')';
            errors.textContent += text + '\n';
            errors.style.display = 'block';
        };
        console.error = (function(old) {
            return function error() {
                errors.textContent += Array.prototype.slice.call(arguments).join(' ') + '\n';
                errors.style.display = '';
                old.apply(this, arguments);
            }
        })(console.error);
    }
}

export default Errors;