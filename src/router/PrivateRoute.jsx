import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
     const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) return <LoadingSpinner />
  if (user) return children
  return <Navigate to='/login' state={location.pathname} replace='true' />
};

PrivateRoute.propTypes = {
  children: PropTypes.element,
}

export default PrivateRoute;