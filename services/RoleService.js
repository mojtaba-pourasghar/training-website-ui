import api from './api';

class RoleService {
    constructor() {
      this.adminRoute = process.env.NEXT_PUBLIC_API_URL+process.env.ADMIN;
      this.adminRoleRoute = `${this.adminRoute}/v1/roles`
    }

    async getAdminRoles(token) {
        return await api
            .get(this.adminRoleRoute, {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
            })
            .then((response) =>                               
              response.data
            )
            .catch(error => {
              throw error;
            });
    }
    
    async getAdminRole(token,roleId) {
   
      return await api
          .get(this.adminRoleRoute+'/'+roleId, {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          })
          .then((response) =>                               
            response.data
          )
          .catch(error => {
            throw error;
          });
  }

    async saveAdminRole(token,formData) {

      return await api
          .post(this.adminRoleRoute,formData, {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          })
          .then((response) =>                               
            response.data
          )
          .catch(error => {
            //console.error(error);
            throw error;
          });
  }

  async updateAdminRole(token,formData) {

    return await api
        .put(this.adminRoleRoute,formData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })
        .then((response) =>                               
          response.data
        )
        .catch(error => {
          throw error;
        });
}

  async deleteAdminRole(token,roleId) {
   
    return await api
        .delete(this.adminRoleRoute+'/'+roleId, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })
        .then((response) =>                               
          response.data
        )
        .catch(error => {
          throw error;
        });
}
}

export default new RoleService;