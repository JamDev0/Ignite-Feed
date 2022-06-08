import Styles from './PostMain.module.css';

export function PostMain({Content}){

    console.log(Content)

    return(
        <main className={Styles.Main}>
            {
                Content?.map((element, index) => {
                    switch(element.Type){
                        case "Paragraph":
                            return(
                                <p
                                key={index}
                                >
                                    {element.Content}
                                </p>
                            );
                            break;
                        case "Link":
                            return (
                                <a
                                 href=''
                                 key={index}
                                >
                                    {element.Content}
                                </a>
                            );
                            break;
                    }
                })
            }
        </main>
    )
}