import { api } from "../App";

export async function saveStory(id, storyData, story) {
    const res = await fetch(api + "stories/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(storyData)
    });

    const savedStory = await res.json();

    if (res.status == "200") {
        const userRes = await fetch(api + "users/" + story.userID);
        const user = await userRes.json();

        user.stories = user.stories.map(s => {
            if (s._id === savedStory._id)
                return savedStory
            return s
        })

        const updateUserRes = await fetch(api + "users/" + user._id.toString(), {
            method: "PUT",
            headers: { "Content-Type": " application/json" },
            body: JSON.stringify({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                stories: user.stories
            })
        });

    }

}