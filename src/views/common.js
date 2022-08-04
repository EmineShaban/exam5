import { html } from "../../node_modules/lit-html/lit-html.js";

export const memPreview = (mem) => html`
 <div class="meme">
                    <div class="card">
                        <div class="info">
                            <p class="meme-title">${mem.title}</p>
                            <img class="meme-image" alt="meme-img" src=${mem.imageUrl}>
                        </div>
                        <div id="data-buttons">
                            <a class="button" href="/details/${mem._id}">Details</a>
                        </div>
                    </div>
                </div>
`

