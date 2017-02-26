function getPath(path) {
    return `http://res.cloudinary.com/yiou-me/image/upload/c_scale,f_auto,w_1000/${path}`;
}

function getVideoPath(path) {
    return `http://res.cloudinary.com/yiou-me/video/upload/${path}`;
}

export default {
    getPath: getPath,
    getVideoPath: getVideoPath
};

