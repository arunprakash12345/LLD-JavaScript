function fetchUserDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["user1", "user2", "user"]);
        }, 2200);
    });
}

function fetchUserPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["post1", "post2", "post3"]);
        }, 2100);
    });
}



Promise.myAll = function (promiseArr) {
    return new Promise((res, rej) => {
        const result = [];
        let completed = 0;

        for (let i = 0; i < promiseArr.length; i++) {
            Promise.resolve(promiseArr[i]).then((value) => {
                result[i] = value;
                completed++;
                if (completed === promiseArr.length)
                    res(result);
            }).catch((err) => {
                rej(err);
            })
        }
    })
}


Promise.myAll([fetchUserDetails(), fetchUserPosts()]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
});
Promise.all([fetchUserDetails(), fetchUserPosts()]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
});