# WaveVerse Backend

Backend API for WaveVerse Grocery Delivery Platform

## Deployment on Render

1. Push backend code to GitHub repository
2. Connect repository to Render
3. Set environment variables:
   - `MONGO_URL`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: Your JWT secret key
   - `NODE_ENV`: production

## API Endpoints

- `/api/health` - Health check
- `/api/user` - User management
- `/api/auth` - Authentication
- `/api/products` - Product management
- `/api/orders` - Order management
- `/api/contact` - Contact forms
- `/api/returns` - Return requests
- `/api/support` - Support requests
- `/api/admin` - Admin operations