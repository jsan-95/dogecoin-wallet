const ObjectUtils = {
    /**
    * Error control of server response
    * @param {String} object 
    * @returns {String}
    */
    toString(object) {
        const objectString = object.toString();

        return (objectString.startsWith("TypeError") ?
            "Server error"
            :
            object.toString()
        );
    }
};

export default ObjectUtils;
