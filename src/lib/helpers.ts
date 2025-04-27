
export const formatTitle = (title: string) => {
return title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, ''); 
};