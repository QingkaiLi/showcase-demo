const MakeErrorHandlingCallback = (msg, cb) => {
    return (err) => {
        if (err) {
            /*eslint-disable no-console*/
            console.error(msg, err);
            /*eslint-enable no-console*/
        }

        if (cb) {
            cb();
        }
    };
};

export default MakeErrorHandlingCallback;
