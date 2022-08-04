import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteMem, getMemById} from "../api/data.js";
import { getUserData } from "../util.js";

let detailsTemplate = (mem, isOwner, onDelete) => html`

<section id="meme-details">
            <h1>Meme Title: ${mem.title}
            </h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src=${mem.imageUrl}>
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>
                        ${mem.description}
                    </p>
                    ${isOwner ? 
                    html` <a class="button warning" href="/edit/${mem._id}">Edit</a>
                    <button @click=${onDelete} href="javascript:void(0)" class="button danger" >Delete</button>` : ``}
                </div>
            </div>
        </section>
`
export async function detailsPage(ctx) {
    const petId = ctx.params.id;
    const pet = await getMemById(petId);
    // const user = ctx.user;
            let userData = getUserData()
// console.log(pet)
    // let userId;
    
    // if (user != null) {
    //     userId = user._id
        
    // }
    
    const isOwner = userData && pet._ownerId == userData.id;
    // const isLoggedIn = user !== undefined;
    
    ctx.render(detailsTemplate(pet, isOwner, onDelete));
    
    async function onDelete() {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await deleteMem(petId);
            ctx.page.redirect('/dashboard');
        }
    }
}
    // export async function detailsPage(ctx) {
    //     let userData = getUserData()
    //     let mem = await getMemById(ctx.params.id)
            
        
    // let isowner = userData && userData.id == book._ownerId
    // let showLikeButton = isowner == false && hasLike == false && userData!= null
    
    // ctx.render(detailsTemplate(book,isowner, onDelete, likes, showLikeButton, onLike))
    
    
    // async function onDelete(){
    //     await deleteBook(ctx.params.id)
    //     ctx.page.redirect('/')
    // }
    
    // async function onLike(){
    //     await likeBook(ctx.params.id)
    //     ctx.page.redirect('/details/' + ctx.params.id)
    // }
    
    
    
    // }
