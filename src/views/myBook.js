import { html } from "../../node_modules/lit-html/lit-html.js";
import { getMyMems } from "../api/data.js";
import { getUserData } from "../util.js";
import { memPreview } from './common.js'


let myBooksTemplate = (mem, user) => html`
        <section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
                <div class="user-content">
                    <p>Username: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>My memes count: ${mem.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
                ${mem.length == 0 ?
               html`<p class="no-memes">No memes in database.</p>` :
               html`${mem.map(memPreview)}`}
            </div>
        </section>
`

export async function myPostPage(ctx) {
    
    let userData = getUserData()
    let books = await getMyMems(userData.id)
    let user = getUserData()
    // console.log(user)
    ctx.render(myBooksTemplate(books, user))
}