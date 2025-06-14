import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Navbar from "../Components/Navbar";
import { api } from "../App";
import { saveStory } from "../utils/saveStory";
import Loading from "../Components/Loading";

const StoryInfo = () => {

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [story, setStory] = useState(null);
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [isPublished, setPublished] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        const findStory = async () => {
            try {
                const res = await fetch(api + "stories/" + id);
                const data = await res.json();
                setStory(data);
                setTitle(data.title);
                setSummary(data.blurb);
                setPublished(data.published);
            } catch (error) {
                console.log("Cannot find story", error);
            } finally {
                setLoading(false);
            }
        }
        findStory();
    }, [id]);

    if (loading)
        return <Loading />

    const handleSaveStory = async (e) => {
        e.preventDefault();
        const storyData = {
            title: title,
            blurb: summary,
            published: isPublished
        };
        try {
            saveStory(id, storyData, story);
            setSaving(true);
        } catch (error) {
            console.log("Cannot save story", error);
        } finally {
            setSaving(false);
        }
    }

    return (
        <div>
            <Navbar redirect={`/dashboard/${story.userID}`} />
            <div className="container min-w-4xl bg-base-200 flex justify-center mx-auto mt-10">
                <div className="card min-w-full">
                    <div className="card-body">
                        <h3 className="card-title flex justify-center mx-auto"> Edit Story Details</h3>
                        <form onSubmit={(e) => handleSaveStory(e)} className="form-control">
                            <label className="label">
                                <span> Title </span>
                            </label>
                            <input type="text"
                                placeholder="title"
                                className="input"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <label className="label">
                                <span> Summary</span>
                            </label>
                            <textarea
                                className="textarea min-h-64 resize-none"
                                placeholder="summary"
                                value={summary}
                                onChange={(e) => setSummary(e.target.value)}
                            />
                            <div className="flex justify-start">
                                <label className="label">
                                    <span> Publish?</span>
                                </label>
                                <input type="checkbox"
                                    checked={isPublished}
                                    onChange={(e) => setPublished(e.target.checked)}
                                    className="checkbox mt-3 bg-secondary mx-10 checkbox-sm"
                                />
                            </div>
                            <button className="btn btn-secondary w-fit mx-auto">
                                {saving ? "Saving..." : "Save"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoryInfo;