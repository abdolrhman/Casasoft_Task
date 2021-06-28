import axios from "axios";

export const CUSTOMERS_URL = "http://localhost:4000/api/ingredient";

// CREATE =>  POST: add a new customer to the server
export async function createCustomer(customer) {
  customer.image = customer.image.name;
  let formData = new FormData();
  formData.append("image", customer.image);

  return axios({
    method: "post",
    url: CUSTOMERS_URL,
    data: customer,
    headers: { "Content-Type": "multipart/form-data" }
  });
}

// READ
export async function getAllCustomers() {
  return axios.get(CUSTOMERS_URL);
}

export function getCustomerById(customerId) {
  return axios.get(`${CUSTOMERS_URL}/${customerId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export async function findCustomers(queryParams) {
  return axios.get(`${CUSTOMERS_URL}`);
}

// UPDATE => PUT: update the customer on the server
export function updateCustomer(customer) {
  return axios.put(`${CUSTOMERS_URL}/${customer.id}`, { customer });
}

// UPDATE Status
export function updateStatusForCustomers(ids, status) {
  return axios.post(`${CUSTOMERS_URL}/updateStatusForCustomers`, {
    ids,
    status
  });
}

// DELETE => delete the customer from the server
export function deleteCustomer(customerId) {
  return axios.delete(`${CUSTOMERS_URL}/${customerId}`);
}

// DELETE Customers by ids
export function deleteCustomers(ids) {
  return axios.post(`${CUSTOMERS_URL}/deleteCustomers`, { ids });
}
