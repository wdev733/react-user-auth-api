const database = require('../../services/mysql');

const getUserByEmail = async email => {
  const user = await database.query("SELECT * FROM t_user where email='" + email + "'");
  if (user.length === 0) {
    return false;
  } else {
    return user[0];
  }
};

const checkPassword = (user, password) => {
  if (user.password === password) {
    return true;
  } else {
    return false;
  }
};

const Account = { getUserByEmail, checkPassword };

export default Account;
