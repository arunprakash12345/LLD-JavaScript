function fetchUserDetails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Resolved user details correctly");
    }, 2000);
  });
}

function fetchUserPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("rejected user posts correctly");
    }, 2000);
  });
}

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let total = 0;
    if (promises.length === 0) {
      return resolve([]);
    }
    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          result[index] = res;
          total++;
          if (total === promises.length) resolve(result);
        })
        .catch((error) => {
          reject(error, "error happened");
        });
    });
  });
};

Promise.myAllSetlled = function (promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let total = 0;
    if (promises.length === 0) {
      return resolve([]);
    }
    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          result[index] = { status: "fulfilled", value: res };
        })
        .catch((error) => {
          result[index] = { status: "rejected", reason: error };
        })
        .finally(() => {
          total++;
          if (total === promises.length) resolve(result);
        });
    });
  });
};

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let rejectedTotal = 0;
    let isSettled = false;
    if (promises.length === 0) {
      return reject(new AggregateError([], "All promises were rejected"));
    }
    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          if (!isSettled) {
            resolve(res);
            isSettled = true;
          }
        })
        .catch((error) => {
          rejectedTotal++;
          result[index] = error;
          if (rejectedTotal === promises.length && !isSettled)
            reject(new AggregateError(result, "All promises were rejected"));
        });
    });
  });
};

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    let isSettled = false;
    promises.forEach((item) => {
      Promise.resolve(item)
        .then((res) => {
          if (!isSettled) {
            isSettled = true;
            resolve(res);
          }
        })
        .catch((error) => {
          if (!isSettled) {
            isSettled = true;
            reject(error);
          }
        });
    });
  });
};

Promise.myRace([fetchUserDetails(), fetchUserPosts()])
  .then((result) => {
    console.log("response from myAny : ", result);
  })
  .catch((error) => {
    console.log("myAny errors : ", error);
  });
