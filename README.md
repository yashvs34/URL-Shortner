## WEBSITE
[DEPLOYMENT LINK](https://url-shortner.yashvs34.me/)  


## ✨ FEATURES
* Shorten URL
* Custom shortid generation
* Deployed on AWS EC2
* Using NGINX for reverse proxy and Certbot for automatic SSL certificate generation for HTTPS delivery
* Configured on custom .me domain


## 🛠 TECH STACK
**Frontend**
- React.js
- TailwindCSS
- Axios API

**Backend**
- Node.js
- Express.js
- Nodemon
- Express-rate-limitter
- Express-router
  

**Database**
- Mongoose
- MongoDB

**Deployment**
- AWS EC2
- NGINX
- Certbot
- .me Domain from Namecheap

## 🏗️ ARCHITECTURE OVERVIEW
<img width="965" height="304" alt="image" src="https://github.com/user-attachments/assets/45aa3b53-18cc-422e-bb65-05524205cce6" />    

<img width="1149" height="603" alt="image" src="https://github.com/user-attachments/assets/07b05c30-6b89-4a7e-a9de-9e26cda94068" />


## 🧑‍💻 LOCAL INSTALLATION & SETUP
> ⚠️ Make sure to set up the `.env` file.  
> .env file must contain **MONGODB_URI** and **PORT**
> Kindly note : If you want to run on your own backend, then you will have to change the api calls in frontend to your custom api
```bash
cd backend        # Move to backend folder
npm install       # Install required dependencies
node index.js     # Start backend server on specified PORT in .env file (https://localhost:PORT)
 
cd ..             # Move back to root folder
cd frontend       # Move to frontend folder
npm install       # Install required dependencies
npm run dev       # Start frontend on port 5173 (https://localhost:5173)
```


## 📝 DESCRIPTION
- You can send url which needs to be shortned and it will be shortned
- If the url is already shortened, then you will a message alerting you about the same along with the shortened url
- To avoid abuse, currently their is an upper limit to number of requests per minute(10 requests/minute per IP)
- Copy the shortned url and you will be redirected to your original website


## 🔮 FUTURE SCOPES
- Checking if the user is inputing random text or actual url
- Making shortned url which is shown to user clickable
- Return number of clicks to the shortned url
- Implementing signin and signup feature for more security
