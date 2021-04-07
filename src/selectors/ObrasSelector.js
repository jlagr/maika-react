import { obras } from "../data/obras"

export const getObras = () => {
    return obras
}

export const getObraById = (id) => {
    return obras.find(o => o.id === id);
} 

export const getImagesWithText = (id) => {
    const { gallery }  = getObraById(id);
    return gallery.filter(g => g.description !== undefined);
}

export const getGallery = (id) => {
    const { gallery }  = getObraById(id);
    return gallery.filter(g => g.description === undefined);
}