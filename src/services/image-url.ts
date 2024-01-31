const getCroppedImageUrl = (url: string) => {
    
    if(!url) return "";
    const index = url.indexOf("media/") + "media/".length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index)        //to get all characters from beginning of url to the media parameter, including the media parameter itself
}

export default getCroppedImageUrl;
