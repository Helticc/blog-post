'use client'
import {useState} from "react";
const page = () => {
    const [submit, setSubmit] = useState("");
    const [title , setTitle] = useState(null);
    const [desc , setDesc] = useState(null);

    const check = (e) => {
        setSubmit(e.target.value);
    }

    const publish = () => {
        if(submit) {
            setTitle(null);
            setDesc(true);
        }else if(!submit) {
            setTitle("Please add your title.");
        }else if(submit) {
            setTitle(true);
            setDesc(null);
        }else if(!submit) {
            setDesc("Please add your description.")
        }
    }   

    return (
        <div className="display-flex">
            <div className="postBlogContainer">
                <div>
                    <input className="title" placeholder="Add your title..." onChange={(e) => check(e)}></input>
                    {title ? <div>{title}</div> : null}
                </div>
                <div>
                    <input className="description" placeholder="Description here..." onChange={(e) => check(e)}></input>
                    {desc ? <div>{desc}</div> : null}
                </div>
                <button onClick = {() => publish()} className="submitButton">Submit</button>
            </div>
        </div>
    )
}

export default page