import style from './Header.module.css';

import IgniteSymbol from '../../public/images/IgniteSymbol.svg';

export function Header(){
    return(
        <header className={style.header}>
            <img src={IgniteSymbol}></img>
            <h1>Ignite Feed</h1>
        </header>
    )
}