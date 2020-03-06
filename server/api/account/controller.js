import { sign } from '../../services/jwt';
import { handleError, handleSuccess } from '../../services/response';

export const login = async ({ user }, res, next) => {
  try {
    let token = await sign(user.id);

    handleSuccess(res, { token, account: user });
  } catch (err) {
    handleError(res, err);
  }
};
