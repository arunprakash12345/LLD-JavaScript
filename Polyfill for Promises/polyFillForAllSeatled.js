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



Promise.myAllSeatled = function (promiseArr) {
    return new Promise((res, rej) => {
        const result = [];
        let completed = 0;
        for (let i = 0; i < promiseArr.length; i++) {
            Promise.resolve(promiseArr[i]).then((val) => {
                result[i] = val;
                completed++;
                if (completed === promiseArr.length) res(result);
            }).catch((error) => {
                result[i] = error;
                completed++;
                if (completed === promiseArr.length) res(result);
            })
        }
    })
}


Promise.myAllSeatled([fetchUserDetails(), fetchUserPosts()]).then((res) => {
    console.log(res);
}).catch((err) => console.log(err));

