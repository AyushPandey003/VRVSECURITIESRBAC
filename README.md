### **Role-Based Access Control (RBAC) UI Submission**  

#### **Project Overview**  
This submission showcases an ecommerce website project where I implemented a fully functional **Role-Based Access Control (RBAC)** UI. The platform supports multiple user roles:  
- **Admin**: Manages users, products, and orders.  
- **Vendor**: Manages their products and order statuses.  
- **Customer**: Browses products, manages their cart, and places orders.  

The RBAC system ensures that each user has access only to features and pages relevant to their role, enhancing security and usability.  

#### **RBAC Implementation guide**  
Key features of the RBAC UI include:  
1. **Dynamic Routing and Access Control**:  
   - Role-based middleware ensures only authorized users can access specific routes.  
   - Unauthorized access redirects users to appropriate fallback pages (e.g., login or error).  

2. **Role-Specific Dashboards**:  
   - Admin Dashboard: Overview of system metrics, user management tools, and order monitoring.  
   - Vendor Dashboard: Product inventory management and order tracking tools.  
   - Customer Dashboard: Personalized account settings and order history.  

3. **Custom Hook for Role Detection**:  
   - Implemented a `useRole` hook leveraging the authentication store to identify and manage user roles.  

4. **Component-Level Role Restrictions**:  
   - Components are conditionally rendered based on user roles, improving the UI’s maintainability.  

#### **My Contribution**  
- Designed and implemented the RBAC logic, including:  
  - Middleware for role validation and dynamic route protection.  
  - Role-specific UI components and navigation menus.  
  - Integration with the authentication system for role detection.  
- Developed reusable hooks and utilities to simplify access control logic across the application.  
- Ensured scalability of the RBAC system to support future roles.  

#### **Links and Instructions**  
- **Repository**:https://github.com/AyushPandey003/VRVSECURITIESRBAC   
- **Demo**:https://grocifymart.vercel.app 

#### **Instructions for Testing**  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/AyushPandey003/VRVSECURITIESRBAC 
   cd registration-app 
   npm install  
   npm run dev  
   ```  
2. Use the following credentials for role-based testing:  
   - **Admin**:  
     - Email: `admin123@gmail.com`  
     - Password: `admin123`  
   - **Vendor**:  
     - Email: `vendor@gmail.com`  
     - Password: `vendor123`  
   - **Customer**:  
     - Email: `customer@gmail.com`  
     - Password: `customer123`  

#### **Conclusion**  
This project demonstrates my ability to create secure and efficient RBAC systems tailored to complex user roles. The implementation is scalable and designed with best practices, showcasing my technical skills and attention to detail in UI development.  
