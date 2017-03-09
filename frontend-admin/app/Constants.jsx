const siteName = "/cms/";
export const Urls = {
    pagesController : siteName + "api/pages/",
    usersController : siteName + "api/users/",
    base : siteName
}
const base = siteName + "admin";
export const NavUrls ={
   
    home : base ,
    webpages : base + "/webpages",
    editor : base + "/webpages/edit",
    users : base + "/users"
}