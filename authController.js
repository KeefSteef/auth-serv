class authController {
  async registration(req, res) {
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async login(req, res) {
    try {
      res.json("Service work!");
    } catch (e) {
      console.log(e);
    }
  }

  async getUsers(req, res) {
    try {
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new authController();
