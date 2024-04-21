// import axios from "../setup/axios";
import axios from "axios";
const registerNewUser = (rawData) => {
  const { confirmPassword, ...dataWithoutConfirmPassword } = rawData;
  return axios.post(
    "https://traceabilitychain-project-backend.onrender.com/api/v1/register",
    dataWithoutConfirmPassword
  );
};

const loginUser = (loginInputs) => {
  const { valueLogin, password } = loginInputs;
  return axios.post(
    "https://traceabilitychain-project-backend.onrender.com/api/v1/login",
    { valueLogin, password }
  );
};
const logoutUser = () => {
  return axios.post(
    "https://traceabilitychain-project-backend.onrender.com/api/v1/logout"
  );
};
// USERS
const fetchAllUser = (page, limit) => {
  return axios.get(
    `https://traceabilitychain-project-backend.onrender.com/api/v1/user/read?page=${page}&limit=${limit}`
  );
};
const createNewUser = (userData) => {
  return axios.post(
    "https://traceabilitychain-project-backend.onrender.com/api/v1/user/create",
    { ...userData }
  );
};
const updateUser = (userData) => {
  return axios.put(
    "https://traceabilitychain-project-backend.onrender.com/api/v1/user/update",
    { ...userData }
  );
};
const deleteUser = (user) => {
  return axios.delete(
    "https://traceabilitychain-project-backend.onrender.com/api/v1/user/delete",
    { data: { id: user.id } }
  );
};

// ACCOUNT
const getUserAccount = () => {
  return axios.get(
    `https://traceabilitychain-project-backend.onrender.com/api/v1/account`
  );
};

export {
  registerNewUser,
  loginUser,
  getUserAccount,
  fetchAllUser,
  createNewUser,
  deleteUser,
  updateUser,
  logoutUser,
};
