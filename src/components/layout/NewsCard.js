import { Fragment } from "react"

function NewsCard(props) {
    return (
        <Fragment>
            <a style={{color: "inherit" }} href={props.fullUrl} target="_blank">
            <h2>{props.title}</h2>
            <img src={props.imgUrl} alt="Can't find!" width="100%" height="70%"/>
            <h4>{props.desc}</h4>
            <h5>{props.by}</h5>
            </a>
        </Fragment>
    )
}

export default NewsCard;
