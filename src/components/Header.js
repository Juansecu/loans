import React from 'react';

// Primera forma de escribir componentes funcionales:
/*function Header(/*props {title}) {
    return(
        <Fragment>
            <h1>{/*props.title}</h1>
        </Fragment>
    );
}*/

// Segunda forma de escribir componentes funcionales:
/*
    Cuando se quiere insertar código JavaScript, se recomienda utilizar los métodos con return, ya que fuera del return es donde se introduce el código JavaScript.
*/
const Header = ({title}) => (
    <h1>{title}</h1>
);

export default Header;