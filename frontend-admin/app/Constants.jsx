const siteName = "/cms/";
export const Urls = {
    pagesController : siteName + "api/pages/",
    pagesQuery : siteName + "api/pages/query",
    usersController : siteName + "api/users/",
    catController : siteName + "api/cats/",
    
    base : siteName
}
const base = siteName + "admin";
export const NavUrls ={
   
    home : base ,
    webpages : base + "/webpages",
    editor : base + "/webpages/edit",
    users : base + "/users",
    categories : base + "/cat",
    catEditor : base + "/cat/edit",
}