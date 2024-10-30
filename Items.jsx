const Items = ({data}) => {

    return (
        <div className="page-center-flex">
            <div className="post-container">
                <img src={data.cover_image} className="post-image"/>
                <div className="info-container">
                    <div className="flare-tag">{data.tag_list[0]}</div>
                    <div className="post-title"><b>{data.title}</b></div>
                    <div className="user-profile">
                        <img className="post-profile" src={data.user.profile_image}/>
                        <div className="post-username">{data.user.username}</div>
                        <div className="post-date">{data.readable_publish_date}, 2024</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Items