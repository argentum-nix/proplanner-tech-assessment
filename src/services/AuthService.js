const validEmail = "prologin@prologin.com";
const validPassword = "ProLogin123456";

export const authenticateUser = async (data) => {
  try {
    const response = await mockPostAuthApi(data);
    return response;
  } catch (error) {
    throw new Error(error.error);
  }
};

const mockPostAuthApi = async (data) => {
  const { email, password } = data;
  return new Promise((resolve, reject) => {
    if (email === validEmail && password === validPassword) {
      resolve({ success: true });
    } else {
      reject({ success: false, error: "Wrong credentials" });
    }
  });
};
