# Namaste React

# Parcel
-Dev Build
-Local Server
-HMR Hot Module Replacement
-File Watching Algorithm - written in C++
-Caching - Faster Builds
-Image Optimization
-Minification
-Bundling
-Compress
-Consistency hashing
-code splitting
-Differntial Bundling - support older browser
-Diagnostic
-Error Handling
-HTTPs
-Tree Shaking - remove unused code
-Different dev and prod bundles

# Namaste Food
-Header
 Logo
 Nav items
  Home
  About Us
  Contact Us
  Cart
-Body
 Search
 Restaurant container
  Restaurant card
  Res-Name
  Cuisines
  Rating
-Footer
 Copyright
 Links
 Address

# Two types of Export
 -Default Export Type (Use if we have just exporting one from that page) 
  Export default Name ;
  Import Name from "./path";
 -Named  Export Type (Use if we have more than one export is requrired from that page)
  Export(before whom we want to export)
  Import {Name} from "../path";
 
# Two types of routing in web apps 
  -Server Side Routing
  -Client Side Routing 

# Redux Toolkit
 - Install @reduxjs/toolkit and react-redux
 - Build our store
 - Connect our store to our app
 - Slice (CartSlice)
 - Dispatch (action)
 - Reducer (function)
 - Selector (subscribed)

# Types of Testing(developer)
 - Unit Testing
 - Integration Testing
 - End to End Testing 

#  Setting up Testing in our app
 - Install React Testing Library
 - Install jest
 - Install Babel dependencies
 - Configure Babel
 - Configure Parcel Config file to disable default Babel transpilation
 - Jest configuration - (npx jest --init)
 - Install jsdom library
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - npm i -D @testing-library/jest-dom
