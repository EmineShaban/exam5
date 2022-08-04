import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllMemes } from "../api/data.js";
import { memPreview } from './common.js'

let dashboardTemplate = (mem) => html`
        <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
            ${mem.length == 0 ?
                html`<p class="no-memes">No memes in database.</p>` :
                html`${mem.map(memPreview)}`} 
			</div>
        </section>`

export async function dashboardPage(ctx) {
    let pet = await getAllMemes()
    ctx.render(dashboardTemplate(pet))
}