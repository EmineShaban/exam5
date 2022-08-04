import { html } from '../../node_modules/lit-html/lit-html.js';
import { editMem, getMemById } from '../api/data.js';

const editTemplate = (mem, onSubmit) => html`
        <section id="edit-meme">
            <form @submit=${onSubmit}  id="edit-form">
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" value=${mem.title}>
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description">
                            ${mem.description} 
                        </textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" value=${mem.imageUrl}>
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>
`;
export async function editPage (ctx) {
    const petId = ctx.params.id;

    const pet = await getMemById(petId);
    ctx.render(editTemplate(pet, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const editPet = {
            title: formData.get('title').trim(),
            description: formData.get('description').trim(),
            imageUrl: formData.get('imageUrl').trim()
        }

        if (Object.values(editPet).some(x => !x)) {
            return alert('All fields are required!');
        }

        await editMem(petId, editPet);
        event.target.reset();
        ctx.page.redirect(`/details/${petId}`);
    }
}

// export async function editPage(ctx) {
//     const id = ctx.params.id;
//     const pet = await getPetById(id);

//     ctx.render(editTemplate(pet, onSubmit));

//     async function onSubmit(event) {
//         event.preventDefault();
//         const formData = new FormData(event.target);
//         const pet = {
//             name: formData.get('name').trim(),
//             breed: formData.get('breed').trim(),
//             age: formData.get('age').trim(),
//             weight: formData.get('weight').trim(),
//             image: formData.get('image').trim(),
//         }

//         if (Object.values(pet).some(x => !x)) {
//             return alert('All fields are required!');
//         }

//         await editToy(id, pet);
//         event.target.reset();
//         ctx.page.redirect('/details');
//     }
// }

