import React from 'react'


const Example = ({name}) => {
    return (
        <div>
         <h1> {name} </h1>
        </div>
    )
}
Example.defaultProps ={
    name: 'Abdou'
}


export default Example