function fetchUserDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(["user1", "user2", "user"]);
        }, 1900);
    });
}

function fetchUserPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(["post1", "post2", "post3"]);
        }, 2100);
    });
}

Promise.myAny = function (promiseArr) {
    return new Promise(async (res, rej) => {
        let rejection = 0;
        let rejectionArr = [];
        for (let i = 0; i < promiseArr.length; i++) {
            try {
                const val = await Promise.resolve(promiseArr[i]);
                res(val);
                break;
            } catch (error) {
                rejectionArr.push(error);
                rejection++;
                if (rejection === promiseArr.length) rej(new AggregateError(rejectionArr, "All promises were rejected"));
            }
        }
    })
}


Promise.myAny([fetchUserDetails(), fetchUserPosts()]).then((res) => {
    console.log(res);
}).catch((err) => console.log(err));
Promise.any([fetchUserDetails(), fetchUserPosts()]).then((res) => {
    console.log(res);
}).catch((err) => console.log(err));

