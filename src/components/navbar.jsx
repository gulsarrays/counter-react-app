import React from 'react';

// class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{' '}
//           <span className="badge badge-pill badge-seconday">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default Navbar;

/// Stateless function component
// here react will pass `props` object as an argument to this function at run time.
// const Navbar = props => {
//   return (
//     <nav className="navbar navbar-light bg-light">
//       <a className="navbar-brand" href="#">
//         Navbar{' '}
//         <span className="badge badge-pill badge-seconday">
//           {props.totalCounters}
//         </span>
//       </a>
//     </nav>
//   );
// };
// export default Navbar;

/// with object de-structring
const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{' '}
        <span className="badge badge-pill badge-seconday">{totalCounters}</span>
      </a>
    </nav>
  );
};
export default Navbar;
