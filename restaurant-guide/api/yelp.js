import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer ZW7sCQc6_wefuzZ7zU_lvNQG9yuy3heKhi2eYuN5_RZMGA8hFX3DZabn_rJ_QtCLDwD-kUsvK6lwgpXSpZEW61rAVjb_Bv4mkGIn4PMkxnmGs7aoU_nAfGm9amd1ZnYx",
  },
});
