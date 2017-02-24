function getPath(path) {
    return `http://res.cloudinary.com/yiou-me/image/upload/c_scale,f_auto,w_1000/${path}`;
}

export default {
    getPath: getPath
};

