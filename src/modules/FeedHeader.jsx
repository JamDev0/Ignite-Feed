import { ProfileImage } from './ProfileImage';

export function FeedHeader(){
    return(
        <header>
            <ProfileImage Image='https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=50'/>
            <h2>Higor Penumbra</h2>
            <span>Dev front-end</span>
        </header>
    )
}