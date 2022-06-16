/**
 * Created by liuyong on 2021/3/19
 */
const getters = {
  user_id: state => state.user.user_id,
  status: state => state.status.status,
  loading: state => state.app.requestLoading
}

export default getters
