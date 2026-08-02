function fetchUserDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["user1", "user2", "user"]);
        }, 1900);
    });
}

function fetchUserPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["post1", "post2", "post3"]);
        }, 2100);
    });
}



Promise.myRace = function (promiseArr) {
    return new Promise((res, rej) => {
        let completed = 0;
        for (let i = 0; i < promiseArr.length; i++) {
            Promise.resolve(promiseArr[i]).then((val) => {
                completed++;
                if (completed === 1) res(val);
            }).catch((error) => {
                completed++;
                if (completed === 1) rej(error);
            })
        }
    })
}


Promise.myRace([fetchUserDetails(), fetchUserPosts()]).then((res) => {
    console.log(res);
}).catch((err) => console.log(err));
Promise.race([fetchUserDetails(), fetchUserPosts()]).then((res) => {
    console.log(res);
}).catch((err) => console.log(err));

