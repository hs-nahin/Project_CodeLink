# **SyncLipika**

### **Tagline:** Seamless Collaboration, Real-Time Creation

---

## **Project Description**

**SyncLipika (সিঙ্কলিপিকা)** is a real-time collaborative code editor built using **React.js**, **Node.js**, and **WebSockets**. The platform empowers users to collaborate on code in real time, enabling seamless synchronization and boosting productivity for developers, educators, and students. The name "Lipika," meaning "script" in Bengali, reflects its goal of fostering effortless collaboration and creative teamwork.

---

## **Features**

- **Real-Time Collaboration**: Instant updates to code changes with WebSocket-powered synchronization.
- **Syntax Highlighting**: Support for multiple programming languages to enhance readability.
- **User Authentication**: Secure login system for private and exclusive collaboration.
- **Role Management**: Assign roles like "Editor" or "Viewer" for controlled access.
- **Session Persistence**: Save and reload coding sessions with ease.
- **Responsive Design**: Fully functional across various devices and screen sizes.

### **Future Enhancements**

- Integration with version control systems like Git.
- Real-time chat functionality for team communication.
- AI-powered code completion and error detection.

---

## **Tech Stack**

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Real-Time Communication**: WebSockets
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

---

## **Setup and Installation**

Follow these steps to set up SyncLipika locally:

### **Prerequisites**

- Node.js and npm installed.
- MongoDB running locally or a MongoDB cloud instance.

### **Steps**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/Synclipika.git
   cd Synclipika
   ```

2. **Install dependencies:**

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Set up environment variables:**

   - Create a `.env` file in the `server` directory.
   - Add the following:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. **Run the application:**

   - Start the backend server:
     ```bash
     cd server
     npm start
     ```
   - Start the frontend:
     ```bash
     cd client
     npm start
     ```

5. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`.

---

## **Folder Structure**

```
SyncLipika/
├── client/         # Frontend React application
│   ├── src/
│   ├── public/
│   └── package.json
├── server/         # Backend Node.js application
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
└── README.md
```

---

## **Contributing**

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add your feature description'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

---

## **Contact**

For queries or suggestions, feel free to contact us:

- **Email**: hs.nahin430@gmail.com
- **GitHub**: [hs-nahin](https://github.com/hs-nahin)

---

Happy Coding! ✨
